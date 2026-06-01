"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "The Source",
    desc: "Single-estate lots from high altitudes.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    ),
  },
  {
    title: "The Roast",
    desc: "Small-batch profiling for maximum clarity.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
      </svg>
    ),
  },
  {
    title: "The Grind",
    desc: "Calibrated specifically for your brew method.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    title: "The Ritual",
    desc: "Take a moment. Brew with intention.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
        <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
        <line x1="6" y1="2" x2="6" y2="4" />
        <line x1="10" y1="2" x2="10" y2="4" />
        <line x1="14" y1="2" x2="14" y2="4" />
      </svg>
    ),
  },
];

const scrollRevealEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const gridContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function ProcessStrip() {
  return (
    <section className="py-20 border-y border-ink/10 relative overflow-hidden">
      {/* Subtle noise texture background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Animated connecting line */}
      <div className="absolute top-1/2 left-0 right-0 hidden md:block pointer-events-none">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: scrollRevealEase }}
          viewport={{ once: false, margin: "-80px" }}
          className="h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent origin-left mx-16"
        />
      </div>

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
                hidden: { opacity: 0, rotateY: 90, scale: 0.7 },
                visible: {
                  opacity: 1,
                  rotateY: 0,
                  scale: 1,
                  transition: {
                    duration: 0.3,
                    ease: scrollRevealEase,
                    delay: idx * 0.06,
                  },
                },
              }}
              className="text-center"
              style={{ perspective: "600px" }}
            >
              <div className="mx-auto mb-6 flex items-center justify-center text-gold relative">
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  className="opacity-90"
                >
                  {step.icon}
                </motion.div>
              </div>
              <h3 className="font-body text-xs font-bold uppercase tracking-[0.15em] text-ink mb-3">
                {step.title}
              </h3>
              <p className="font-body text-sm text-muted">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
