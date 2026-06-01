"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import VideoBackground from "@/components/ui/VideoBackground";

const scrollRevealEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function EstateChronicles() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax: content moves at different rate
  const textY = useTransform(scrollYProgress, [0, 1], ["30%", "-30%"]);
  const titleScale = useTransform(scrollYProgress, [0.2, 0.5], [0.9, 1]);
  const titleSpacing = useTransform(scrollYProgress, [0.15, 0.45], [16, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center my-24"
    >
      {/* Video Background */}
      <VideoBackground
        src="https://videos.pexels.com/video-files/6896028/6896028-uhd_2560_1440_24fps.mp4"
        poster="/images/brand/estate-chronicles.jpg"
        overlay="bg-dark/55"
      />

      {/* Content */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col gap-6"
      >
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: scrollRevealEase }}
          viewport={{ once: false, margin: "-100px" }}
          style={{ scale: titleScale, letterSpacing: titleSpacing }}
          className="font-display text-5xl md:text-7xl lg:text-[80px] text-white leading-tight"
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
      </motion.div>
    </section>
  );
}
