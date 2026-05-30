"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ProductImage from "@/components/ui/ProductImage";
import Button from "@/components/ui/Button";

const scrollRevealEase: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const textStaggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const textChildVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: scrollRevealEase },
  },
};

export default function AlchemyOfRoasting() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 min-h-screen my-24 bg-dark overflow-hidden">
      {/* Left: Panning background image */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: scrollRevealEase }}
        viewport={{ once: false, margin: "-80px" }}
        className="relative h-[50vh] lg:h-auto w-full overflow-hidden"
      >
        <div className="absolute inset-0 animate-bg-pan">
          <ProductImage
            src="/images/brand/roasting-alchemy.jpg"
            alt="Coffee beans being roasted in a traditional drum roaster"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        {/* Tinted overlay */}
        <div className="absolute inset-0 bg-dark/40 mix-blend-multiply" />
      </motion.div>

      {/* Right: Text content */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: scrollRevealEase, delay: 0.2 }}
        viewport={{ once: false, margin: "-80px" }}
        className="flex flex-col justify-center p-10 md:p-20 xl:p-28 gap-8 text-white"
      >
        <motion.div
          variants={textStaggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-80px" }}
        >
          <motion.h2
            variants={textChildVariant}
            className="font-display text-4xl md:text-5xl lg:text-[56px] leading-tight text-white tracking-wide mb-6"
          >
            The Alchemy of Roasting
          </motion.h2>
          <motion.div
            variants={textChildVariant}
            className="w-16 h-[2px] bg-gold mb-8"
          />
          <motion.p
            variants={textChildVariant}
            className="font-body text-lg md:text-xl text-white/60 leading-relaxed mb-6"
          >
            Transformation happens in the drum. We approach roasting as a
            delicate conversation between heat, time, and the bean&apos;s
            inherent potential. Our slow, measured profiles coax out the complex
            sugars and deep, resonant flavors characteristic of fine Indian
            filter coffees.
          </motion.p>
          <motion.p
            variants={textChildVariant}
            className="font-body text-lg md:text-xl text-white/60 leading-relaxed mb-10"
          >
            It is not about rushing to darkness, but rather finding the precise
            moment where acidity yields to richness.
          </motion.p>
          <motion.div variants={textChildVariant} className="self-start">
            <Link href="/" className="self-start">
              <Button variant="ghost" size="lg">
                Explore Our Process
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
