"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";
import CoffeeBagPlaceholder from "./CoffeeBagPlaceholder";

interface ProductImageProps extends Omit<ImageProps, "src" | "alt"> {
  src?: string | null;
  alt: string;
  fallbackText?: string;
}

export default function ProductImage({ src, alt, fallbackText, className, ...props }: ProductImageProps) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div className={`flex flex-col items-center justify-center bg-ink/5 text-ink/20 ${props.fill ? "absolute inset-0" : "w-full h-full"} ${className || ""}`}>
        <CoffeeBagPlaceholder className="w-1/2 h-1/2 max-w-16" />
        {fallbackText && (
          <span className="font-body text-[10px] uppercase tracking-wider mt-2 px-2 text-center">
            {fallbackText}
          </span>
        )}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      {...props}
    />
  );
}
