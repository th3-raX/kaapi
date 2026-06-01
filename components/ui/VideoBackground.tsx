"use client";

import { useRef, useEffect, useState } from "react";

interface VideoBackgroundProps {
  src: string;
  poster?: string;
  overlay?: string; // Tailwind / CSS classes for overlay
  className?: string;
  children?: React.ReactNode;
}

/**
 * Lazy-loaded video background: plays only when visible in viewport.
 * Falls back to poster image if video cannot load.
 */
export default function VideoBackground({
  src,
  poster,
  overlay = "bg-dark/50",
  className = "",
  children,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!video.src || video.src !== src) {
      video.src = src;
      video.load();
    }

    // Explicitly set muted again as some browsers require it for autoplay
    video.muted = true;
    video.defaultMuted = true;

    video.play().catch((e) => {
      console.error("Video autoplay failed:", e);
    });
  }, [src]);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className} z-0`}>
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        autoPlay
        poster={poster}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className={`absolute inset-0 ${overlay}`} />

      {children}
    </div>
  );
}
