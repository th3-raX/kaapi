"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Button from "@/components/ui/Button";
import KolamPattern from "@/components/ui/KolamPattern";
import VideoBackground from "@/components/ui/VideoBackground";

const heroContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

/* Cinematic blur-to-sharp scale reveal */
const heroTitleVariants = {
  hidden: { opacity: 0, scale: 0.85, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
  },
};

const heroFadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-64px)] flex items-center justify-center bg-dark overflow-hidden px-6">
      <VideoBackground
        src="/videos/test.mp4"
        overlay="bg-dark/60"
      />

      {/* Background Pattern */}
      {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-gold z-[1]">
        <KolamPattern size={800} opacity={0.08} animate={true} />
      </div> */}

      <motion.div
        variants={heroContainerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center"
      >
        <motion.h1
          variants={heroTitleVariants}
          className="font-display text-4xl md:text-6xl text-white tracking-wide leading-tight mb-6"
        >
          Filter Coffee, Elevated.
        </motion.h1>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: {
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.3,
              },
            },
          }}
          className="font-body text-lg text-white/60 mb-10 max-w-xl mx-auto"
        >
          Single-estate South Indian beans. Roasted slow. Served with intention.
        </motion.p>

        <motion.div
          variants={heroFadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <Link href="/collections" className="w-full sm:w-auto">
            <Button variant="primary" className="w-full sm:w-auto">
              Shop Coffee
            </Button>
          </Link>
          <Link href="/collections" className="w-full sm:w-auto">
            <Button variant="ghost" className="w-full sm:w-auto">
              Our Story
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
