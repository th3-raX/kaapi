"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import VideoBackground from "@/components/ui/VideoBackground";

const scrollRevealEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const textStaggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const textChildVariant = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: scrollRevealEase },
  },
};

export default function FeaturedMicrolot() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 min-h-screen bg-[#F3EFE9] text-ink overflow-hidden border-b border-ink/10">
      {/* Left: Visual */}
      <motion.div
        initial={{ opacity: 0, x: -60, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        transition={{ duration: 1.2, ease: scrollRevealEase }}
        viewport={{ once: true, margin: "-10%" }}
        className="relative h-[60vh] lg:h-auto w-full"
      >
        <VideoBackground
          src="/videos/featured_microlot.mp4"
          overlay="bg-transparent"
        />
      </motion.div>

      {/* Right: Copy */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        variants={textStaggerContainer}
        className="flex flex-col justify-center p-12 md:p-20 lg:p-24 xl:p-32"
      >
        <motion.h2
          variants={textChildVariant}
          className="font-display text-5xl md:text-6xl lg:text-[72px] leading-[0.9] tracking-tight mb-8 lowercase"
        >
          colombia
          <br />
          edward sandoval
          <br />
          chiroso
        </motion.h2>

        <motion.div variants={textChildVariant} className="mb-6">
          <p className="font-body font-bold text-sm md:text-base uppercase tracking-[0.1em]">
            Grapefruit | Prune | Raw Sugar | Minerality
          </p>
        </motion.div>

        <motion.p
          variants={textChildVariant}
          className="font-body text-lg md:text-xl text-ink/80 leading-relaxed mb-10 max-w-lg"
        >
          This is another washed micro-lot from our friends at Pergamino coffee.
          Edward Sandoval produces coffee in Ibague, Tolima, which yields an
          altogether unique cup profile. Highlighting the unique terroir of
          Tolima, expect delicate melon and a tea-like tactile in this versatile
          coffee. We enjoy this coffee thoroughly as a filter offering.
        </motion.p>

        <motion.div variants={textChildVariant} className="flex flex-col gap-4">
          <p className="font-body text-xs text-ink/60 uppercase tracking-[0.15em] font-semibold">
            Learn More By Clicking Below!
          </p>
          <Link href="/products/coorg-estate" className="self-start">
            <button className="bg-dark text-white font-body font-bold text-sm uppercase tracking-[0.1em] px-8 py-4 hover:bg-ink/80 transition-colors">
              Explore This Offering
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
