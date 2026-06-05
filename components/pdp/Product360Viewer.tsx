"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Product360ViewerProps {
  imagePathPrefix: string;
  frameCount: number;
}

export default function Product360Viewer({
  imagePathPrefix,
  frameCount,
}: Product360ViewerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [currentFrame, setCurrentFrame] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const dragStartX = useRef(0);
  const frameAtDragStart = useRef(1);

  // Preload images
  useEffect(() => {
    let loaded = 0;
    const images: HTMLImageElement[] = [];
    
    // We want to avoid memory leaks or issues with React strict mode double-firing
    imagesRef.current = [];

    for (let i = 1; i <= frameCount; i++) {
      const img = new window.Image();
      const paddedIndex = i.toString().padStart(3, "0");
      img.src = `${imagePathPrefix}${paddedIndex}.jpg`;
      img.onload = () => {
        loaded++;
        setImagesLoaded(loaded);
        // Draw the first frame once it loads, if it's frame 1
        if (i === 1) {
          drawFrame(1);
        }
      };
      images.push(img);
    }
    imagesRef.current = images;
  }, [imagePathPrefix, frameCount]);

  const drawFrame = (frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imagesRef.current[frameIndex - 1];
    if (img && img.complete) {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw image to fill canvas (assuming image is square, it will fit perfectly)
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
  };

  useEffect(() => {
    if (imagesLoaded > 0) {
      drawFrame(currentFrame);
    }
  }, [currentFrame, imagesLoaded]);

  const handlePointerDown = (e: React.PointerEvent) => {
    if (imagesLoaded < frameCount) return;
    setIsDragging(true);
    setHasInteracted(true);
    dragStartX.current = e.clientX;
    frameAtDragStart.current = currentFrame;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStartX.current;

    // Adjust sensitivity: e.g., 5px drag = 1 frame
    const sensitivity = 5;
    const frameDelta = Math.floor(deltaX / sensitivity);

    // Calculate new frame with clamping (no wrap-around)
    let newFrame = frameAtDragStart.current - frameDelta;
    if (newFrame < 1) {
      newFrame = 1;
    } else if (newFrame > frameCount) {
      newFrame = frameCount;
    }

    setCurrentFrame(newFrame);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  return (
    <div
      className="relative aspect-square w-full max-w-[500px] bg-ink/5 overflow-hidden cursor-grab active:cursor-grabbing touch-none select-none flex items-center justify-center rounded-sm"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      <canvas
        ref={canvasRef}
        width={800}
        height={800}
        className="w-full h-full object-contain pointer-events-none"
      />

      {/* Loading State */}
      <AnimatePresence>
        {imagesLoaded < frameCount && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center bg-bg/50 backdrop-blur-sm z-10 pointer-events-none"
          >
            <p className="font-body text-xs text-ink font-bold uppercase tracking-[0.1em]">
              Loading 360° View ({Math.round((imagesLoaded / frameCount) * 100)}%)
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 360 Icon overlay */}
      <AnimatePresence>
        {imagesLoaded === frameCount && !hasInteracted && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10, transition: { duration: 0.2 } }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-ink text-bg px-5 py-2.5 rounded-full pointer-events-none shadow-lg"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="font-body text-xs font-bold uppercase tracking-[0.1em]">
              Drag to Rotate
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
