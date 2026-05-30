"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Button from "@/components/ui/Button";
import KolamPattern from "@/components/ui/KolamPattern";

const heroContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const heroItemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-64px)] flex items-center justify-center bg-dark overflow-hidden px-6">
      {/* Background Pattern */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-gold">
        <KolamPattern size={800} opacity={0.1} animate={true} />
      </div>

      <motion.div
        variants={heroContainerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center"
      >
        <motion.h1
          variants={heroItemVariants}
          className="font-display text-4xl md:text-6xl text-white tracking-wide leading-tight mb-6"
        >
          Filter Coffee, Elevated.
        </motion.h1>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.9, ease: "easeOut", delay: 0.3 },
            },
          }}
          className="font-body text-lg text-white/60 mb-10 max-w-xl mx-auto"
        >
          Single-estate South Indian beans. Roasted slow. Served with intention.
        </motion.p>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.9, ease: "easeOut", delay: 0.5 },
            },
          }}
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
