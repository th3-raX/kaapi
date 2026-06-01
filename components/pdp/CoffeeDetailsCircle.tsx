"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Product } from "@/data/products";

/* ── SVG Icons for each detail ── */
const icons: Record<string, React.ReactNode> = {
  extraction: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v6m0 0L9 5m3 3l3-3M5 12h14M7 17l2-2m6 2l-2-2m-1 5a4 4 0 01-4 0"/></svg>
  ),
  caffeine: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 8h1a4 4 0 010 8h-1M3 8h14v9a4 4 0 01-4 4H7a4 4 0 01-4-4V8zm3-5v3m4-3v3m4-3v3"/></svg>
  ),
  roastLevel: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3"/><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41"/></svg>
  ),
  roaster: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 6V2m0 4a6 6 0 100 12 6 6 0 000-12zm0 12v4M4.5 14.5l-2 2m17-2l2 2"/></svg>
  ),
  drying: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="5"/><path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
  ),
  abstract: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
  ),
  origin: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10A15.3 15.3 0 0112 2z"/></svg>
  ),
  variety: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22c-4-3-8-6-8-11a8 8 0 1116 0c0 5-4 8-8 11z"/><circle cx="12" cy="11" r="3"/></svg>
  ),
  harvest: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1116 0z"/><path d="M12 7v4m-2-2h4"/></svg>
  ),
  process: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16v16H4zM4 9h16M9 4v16"/></svg>
  ),
  altitude: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 20l5-12 4 6 3-4 4 10H4z"/></svg>
  ),
};

interface DetailItem {
  key: string;
  label: string;
  value: string;
  description: string;
  icon: React.ReactNode;
}

function buildDetails(product: Product): { left: DetailItem[]; right: DetailItem[] } {
  const all: DetailItem[] = [
    {
      key: "extraction",
      label: "PREFERRED EXTRACTION",
      value: product.stats.preferredExtraction,
      description: `${product.stats.preferredExtraction} is the recommended brewing method for ${product.name}. This extraction technique is chosen to best showcase the bean's unique flavour profile and body, producing a cup that honours its origin and processing.`,
      icon: icons.extraction,
    },
    {
      key: "caffeine",
      label: "CAFFEINE",
      value: product.stats.caffeineMg,
      description: `With ${product.stats.caffeineMg} of caffeine, ${product.name} delivers a balanced energy lift. The caffeine content is influenced by the ${product.stats.variety} variety and ${product.stats.roastLevel.toLowerCase()} roast profile.`,
      icon: icons.caffeine,
    },
    {
      key: "roastLevel",
      label: "ROAST LEVEL",
      value: product.stats.roastLevel,
      description: `${product.name} is roasted to a ${product.stats.roastLevel.toLowerCase()} level on our ${product.stats.productionRoaster}. We roast to tight tolerances, fine-tuning temperature curves to balance acidity and sweetness while honouring origin character.`,
      icon: icons.roastLevel,
    },
    {
      key: "roaster",
      label: "PRODUCTION ROASTER",
      value: product.stats.productionRoaster,
      description: `Roasted on our ${product.stats.productionRoaster}. Each roast goes through a rigorous dial-in process where we fine-tune temperature curves. We roast in small 5kg batches to ensure maximum quality and consistency.`,
      icon: icons.roaster,
    },
    {
      key: "drying",
      label: "DRYING METHOD",
      value: product.stats.dryingMethod,
      description: `${product.stats.dryingMethod} — this drying technique is critical to ${product.name}'s flavour development. The controlled drying process stabilises the seed structure for uniform roasting and optimal extraction.`,
      icon: icons.drying,
    },
    {
      key: "abstract",
      label: "COFFEE SUMMARY",
      value: "Abstract",
      description: product.abstract,
      icon: icons.abstract,
    },
    {
      key: "origin",
      label: "ORIGIN",
      value: product.estate.replace(" · ", ", "),
      description: `Sourced from the estates of ${product.estate.replace(" · ", ", ")}. ${product.accordion.aboutEstate.slice(0, 200)}...`,
      icon: icons.origin,
    },
    {
      key: "variety",
      label: "VARIETY",
      value: product.stats.variety,
      description: `${product.stats.variety} — grown at ${product.stats.altitude} altitude. This variety is prized for its unique cup characteristics and has been carefully selected to thrive in the terroir of ${product.estate}.`,
      icon: icons.variety,
    },
    {
      key: "harvest",
      label: "HARVEST SEASON",
      value: product.stats.harvestSeason,
      description: `Harvested during ${product.stats.harvestSeason}. Our beans are hand-picked at peak ripeness during this window, ensuring optimal sugar development and flavour potential for ${product.name}.`,
      icon: icons.harvest,
    },
    {
      key: "process",
      label: "PROCESS METHOD",
      value: product.stats.process,
      description: `${product.stats.process} process — this method is fundamental to the flavour profile of ${product.name}. ${product.accordion.tastingNotes.slice(0, 180)}...`,
      icon: icons.process,
    },
  ];

  return {
    left: all.slice(0, 5),
    right: all.slice(5, 10),
  };
}

const itemVariant = {
  hidden: (side: "left" | "right") => ({
    opacity: 0,
    x: side === "left" ? -60 : 60,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function CoffeeDetailsCircle({ product }: { product: Product }) {
  const { left, right } = buildDetails(product);
  const defaultDetail = left.find((d) => d.key === "abstract") ||
    right.find((d) => d.key === "abstract") ||
    left[0];
  const [activeDetail, setActiveDetail] = useState<DetailItem>(defaultDetail);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative py-24 px-6 md:px-16 max-w-[1440px] mx-auto"
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-3xl md:text-4xl text-ink mb-2">
          Coffee Details
        </h2>
        <p className="font-body text-sm text-muted">
          Hover over each feature to learn more.
        </p>
      </motion.div>

      {/* Circular Layout */}
      <div className="flex items-center justify-center gap-4 md:gap-8 lg:gap-12">
        {/* Left Column */}
        <div className="flex flex-col gap-6 md:gap-8 items-end flex-1 max-w-[320px]">
          {left.map((item, idx) => (
            <motion.div
              key={item.key}
              custom="left"
              variants={itemVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.08 }}
              onMouseEnter={() => setActiveDetail(item)}
              className={`flex items-center gap-3 cursor-pointer transition-all duration-300 group ${
                activeDetail.key === item.key
                  ? "opacity-100"
                  : "opacity-40 hover:opacity-70"
              }`}
            >
              <div className="text-right">
                <p className="font-body text-sm md:text-base font-semibold text-ink leading-tight">
                  {item.value}
                </p>
                <p className="font-body text-[10px] md:text-xs text-muted uppercase tracking-[0.12em]">
                  {item.label}
                </p>
              </div>
              <div
                className={`w-9 h-9 md:w-10 md:h-10 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                  activeDetail.key === item.key
                    ? "border-gold text-gold bg-gold/10"
                    : "border-ink/20 text-ink/40 group-hover:border-gold/50 group-hover:text-gold/60"
                }`}
              >
                {item.icon}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Center Circle */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
          className="relative w-[260px] h-[260px] md:w-[360px] md:h-[360px] lg:w-[420px] lg:h-[420px] shrink-0"
        >
          {/* SVG Ring */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 420 420"
          >
            <circle
              cx="210"
              cy="210"
              r="200"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-ink/10"
            />
            <circle
              cx="210"
              cy="210"
              r="160"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-ink/5"
              strokeDasharray="4 4"
            />
          </svg>

          {/* Center Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 md:p-10 text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDetail.key}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center"
              >
                <h3 className="font-display text-2xl md:text-4xl lg:text-5xl text-ink mb-2 lowercase italic">
                  {activeDetail.key === "abstract"
                    ? activeDetail.value
                    : activeDetail.label.toLowerCase()}
                </h3>
                <p className="font-body text-xs md:text-sm text-muted leading-relaxed max-w-[280px]">
                  {activeDetail.description.length > 250
                    ? activeDetail.description.slice(0, 250) + "..."
                    : activeDetail.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Right Column */}
        <div className="flex flex-col gap-6 md:gap-8 items-start flex-1 max-w-[320px]">
          {right.map((item, idx) => (
            <motion.div
              key={item.key}
              custom="right"
              variants={itemVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.08 }}
              onMouseEnter={() => setActiveDetail(item)}
              className={`flex items-center gap-3 cursor-pointer transition-all duration-300 group ${
                activeDetail.key === item.key
                  ? "opacity-100"
                  : "opacity-40 hover:opacity-70"
              }`}
            >
              <div
                className={`w-9 h-9 md:w-10 md:h-10 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                  activeDetail.key === item.key
                    ? "border-gold text-gold bg-gold/10"
                    : "border-ink/20 text-ink/40 group-hover:border-gold/50 group-hover:text-gold/60"
                }`}
              >
                {item.icon}
              </div>
              <div className="text-left">
                <p className="font-body text-sm md:text-base font-semibold text-ink leading-tight">
                  {item.value}
                </p>
                <p className="font-body text-[10px] md:text-xs text-muted uppercase tracking-[0.12em]">
                  {item.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
