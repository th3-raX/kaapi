"use client";

import { motion } from "framer-motion";
import ProductImage from "@/components/ui/ProductImage";
import Link from "next/link";

const scrollRevealEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const textStaggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const textChildVariant = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: scrollRevealEase },
  },
};

export default function BrandStory() {
  return (
    <section className="py-24 bg-bg text-ink overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Image with Ken Burns zoom */}
        <motion.div
          initial={{ opacity: 0, scale: 1.15 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: scrollRevealEase }}
          viewport={{ once: false, margin: "-80px" }}
        >
          <div className="relative w-full aspect-[16/10] bg-ink/5 rounded-xl overflow-hidden">
            <motion.div
              animate={{
                scale: [1, 1.06, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0"
            >
              <ProductImage
                src="/images/brand/our-story.png"
                alt="From the Estates of Coorg"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Text with line-by-line stagger from right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: scrollRevealEase, delay: 0.2 }}
          viewport={{ once: false, margin: "-80px" }}
        >
          <motion.div
            variants={textStaggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-80px" }}
            className="max-w-md"
          >
            <motion.h2
              variants={textChildVariant}
              className="font-display text-4xl md:text-5xl text-ink mb-6 leading-tight"
            >
              From the Estates of Coorg
            </motion.h2>
            <motion.div
              variants={textChildVariant}
              className="w-16 h-[2px] bg-gold mb-8"
            />
            <motion.p
              variants={textChildVariant}
              className="font-body text-ink/80 text-lg leading-relaxed mb-10"
            >
              Our journey begins in the mist-shrouded hills of Southern India. We partner exclusively with multi-generational estates that prioritize shade-grown, bird-friendly cultivation. Every bean is hand-picked, naturally processed, and roasted in small batches to honor its provenance.
            </motion.p>
            <motion.div variants={textChildVariant}>
              <Link 
                href="/"
                className="inline-flex items-center gap-2 font-body text-sm font-bold tracking-[0.1em] text-gold uppercase hover:text-ink transition-colors"
              >
                Read Our Story &rarr;
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
