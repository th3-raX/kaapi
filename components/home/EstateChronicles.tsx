"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ProductImage from "@/components/ui/ProductImage";

const scrollRevealEase: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

export default function EstateChronicles() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax: image moves slower than scroll
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center my-24"
    >
      {/* Parallax Background Image */}
      <motion.div
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
        style={{ y }}
      >
        <ProductImage
          src="/images/brand/estate-chronicles.jpg"
          alt="Lush coffee estate in Coorg"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-dark/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col gap-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: scrollRevealEase }}
          viewport={{ once: false, margin: "-100px" }}
          className="font-display text-5xl md:text-7xl lg:text-[80px] text-white leading-tight tracking-wide"
        >
          The Estate Chronicles
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: scrollRevealEase, delay: 0.25 }}
          viewport={{ once: false, margin: "-100px" }}
          className="font-body text-lg md:text-xl text-white/60 max-w-2xl mx-auto"
        >
          Rooted in the lush, mist-covered elevations of Coorg, our beans absorb
          the wild, untamed essence of their terroir.
        </motion.p>
      </div>
    </section>
  );
}
