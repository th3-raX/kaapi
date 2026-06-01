"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import VideoBackground from "@/components/ui/VideoBackground";

const scrollRevealEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function SubscribeBanner() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax: video moves slower than scroll
  const videoY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[90vh] min-h-[600px] w-full overflow-hidden flex items-center justify-center bg-dark"
    >
      {/* Parallax Video Background */}
      <motion.div style={{ y: videoY }} className="absolute inset-[-20%] w-[140%] h-[140%]">
        <VideoBackground
          src="/videos/subscribe_banner.mp4"
          overlay="bg-dark/70"
        />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: textY }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: scrollRevealEase }}
        viewport={{ once: true, margin: "-10%" }}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center gap-8"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: scrollRevealEase, delay: 0.1 }}
          viewport={{ once: true }}
          className="font-display text-5xl md:text-7xl lg:text-[80px] text-white lowercase italic leading-none"
        >
          subscribe & save
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: scrollRevealEase, delay: 0.2 }}
          viewport={{ once: true }}
          className="font-body text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
        >
          When coffees arrive at our roastery, we meticulously refine each coffee&apos;s roast profile with precision, ensuring every cup highlights the coffee&apos;s natural brilliance. But our dedication to quality doesn&apos;t stop there. Each roast is meticulously tracked, cupped, and published, ensuring consistency and excellence with every batch.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: scrollRevealEase, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link href="/collections">
            <button className="bg-white text-dark font-body font-bold text-sm uppercase tracking-[0.1em] px-8 py-4 hover:bg-white/90 transition-colors">
              Explore Coffee Subscriptions
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
