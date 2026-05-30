"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "1. The Source",
    desc: "Single-estate lots from high altitudes.",
  },
  {
    title: "2. The Roast",
    desc: "Small-batch profiling for maximum clarity.",
  },
  {
    title: "3. The Grind",
    desc: "Calibrated specifically for your brew method.",
  },
  {
    title: "4. The Ritual",
    desc: "Take a moment. Brew with intention.",
  },
];

const scrollRevealEase: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const gridContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ProcessStrip() {
  return (
    <section className="py-20 border-y border-ink/10 relative">
      {/* Subtle noise texture background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        <motion.div
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8"
        >
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 0.5,
                    ease: scrollRevealEase,
                    delay: idx * 0.1,
                  },
                },
              }}
              className="text-center"
            >
              {/* Minimal Icon Placeholder */}
              <div className="w-12 h-12 mx-auto mb-6 rounded-full border border-gold flex items-center justify-center text-gold">
                <motion.span
                  whileHover={{ rotate: 10, scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="font-display text-xl"
                >
                  {idx + 1}
                </motion.span>
              </div>
              <h3 className="font-body text-xs font-bold uppercase tracking-[0.15em] text-ink mb-3">
                {step.title}
              </h3>
              <p className="font-body text-sm text-muted">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
