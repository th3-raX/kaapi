"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductImage from "@/components/ui/ProductImage";
import Link from "next/link";
import { type Product } from "@/data/products";
import { useCartStore } from "@/store/cart";
import { formatPrice } from "@/lib/utils";
import Button from "@/components/ui/Button";
import PillButton from "@/components/ui/PillButton";
import FlavorPill from "@/components/ui/FlavorPill";
import QuantityStepper from "@/components/ui/QuantityStepper";
import VideoBackground from "@/components/ui/VideoBackground";
import CoffeeDetailsCircle from "@/components/pdp/CoffeeDetailsCircle";
import Product360Viewer from "@/components/pdp/Product360Viewer";

type SizeOption = "100g" | "250g" | "500g";
type GrindOption = "Whole Bean" | "Filter Grind" | "Espresso Grind";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function ProductDetailClient({ product }: { product: Product }) {
  const addItem = useCartStore((state) => state.addItem);

  // Form State
  const [size, setSize] = useState<SizeOption>("250g");
  const [grind, setGrind] = useState<GrindOption>("Filter Grind");
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Accordion State
  const [openAccordion, setOpenAccordion] = useState<string | null>(
    "About Estate",
  );

  // Dynamic Price
  const currentPrice = product.price[size];

  const handleAddToCart = () => {
    const sizeStr = size.toUpperCase();
    const variant = product.shopifyVariants?.find(
      (v) => v.title.includes(sizeStr) && v.title.includes(grind),
    );

    addItem({
      productId: product.id,
      variantId: variant ? variant.id : "",
      slug: product.slug,
      name: product.name,
      size,
      grind,
      price: currentPrice,
      quantity,
      image: product.images[0],
    });

    // Reset quantity after adding
    setQuantity(1);
  };

  const toggleAccordion = (title: string) => {
    setOpenAccordion((prev) => (prev === title ? null : title));
  };

  return (
    <div className="min-h-screen bg-bg pdp-scroll-container">
      {/* ── Section 1: Product Hero with Video ── */}
      <section className="pdp-snap-section relative min-h-screen">
        {/* Subtle video background */}
        <div className="absolute inset-0 z-0">
          <VideoBackground
            src="https://videos.pexels.com/video-files/5537790/5537790-uhd_2560_1440_30fps.mp4"
            overlay="bg-bg/92"
          />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-16 py-12">
          {/* Breadcrumbs */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="flex items-center gap-2 font-body text-xs text-muted uppercase tracking-[0.1em] mb-8"
          >
            <Link href="/" className="hover:text-ink transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/collections"
              className="hover:text-ink transition-colors"
            >
              {product.category.replace("-", " ")}
            </Link>
            <span>/</span>
            <span className="text-ink font-semibold">{product.name}</span>
          </motion.nav>

          <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* Left: Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease }}
              className="w-full lg:w-[55%] lg:sticky lg:top-24 flex lg:justify-center"
            >
              <div className="flex flex-col gap-4 w-full max-w-[500px]">
                {product.has360View && product.images360Path && product.images360Count ? (
                  <Product360Viewer
                    imagePathPrefix={product.images360Path}
                    frameCount={product.images360Count}
                  />
                ) : (
                  <>
                    {/* Main Image */}
                    <motion.div
                      key={activeImageIndex}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      className="relative aspect-square bg-ink/5 overflow-hidden w-full rounded-sm"
                    >
                      <ProductImage
                        src={product.images[activeImageIndex]}
                        alt={`${product.name} main view`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 500px"
                      />
                    </motion.div>

                    {/* Thumbnails */}
                    <div className="grid grid-cols-4 gap-4 w-full">
                      {product.images.map((src, idx) => (
                        <motion.button
                          key={idx}
                          onClick={() => setActiveImageIndex(idx)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`relative aspect-square overflow-hidden transition-all duration-300 rounded-sm ${
                            activeImageIndex === idx
                              ? "border-2 border-gold ring-2 ring-gold/20"
                              : "border-2 border-transparent hover:border-gold/50"
                          }`}
                        >
                          <ProductImage
                            src={src}
                            alt={`${product.name} view ${idx + 1}`}
                            fill
                            className="object-cover"
                            sizes="120px"
                          />
                        </motion.button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </motion.div>

            {/* Right: Product Details */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.15 }}
              className="w-full lg:w-[45%] flex flex-col"
            >
              {/* Header */}
              <div className="mb-6">
                <motion.h1
                  initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.7, ease }}
                  className="font-display text-4xl md:text-5xl text-ink mb-2"
                >
                  {product.name}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="font-body text-sm text-muted uppercase tracking-[0.15em] mb-4"
                >
                  {product.estate}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="font-body text-2xl font-semibold text-ink mb-6"
                >
                  {formatPrice(currentPrice)}
                </motion.p>

                <div className="flex flex-wrap gap-x-3 gap-y-2">
                  {product.flavourNotes.map((note, idx) => (
                    <motion.span
                      key={note}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + idx * 0.05 }}
                      className="flex items-center"
                    >
                      <FlavorPill label={note} />
                      {idx < product.flavourNotes.length - 1 && (
                        <span className="text-muted/50 ml-3">|</span>
                      )}
                    </motion.span>
                  ))}
                </div>
              </div>

              <hr className="border-t border-ink/10 mb-8" />

              {/* Selectors */}
              <div className="mb-8 space-y-6">
                {/* Size Selector */}
                <div>
                  <h3 className="font-body text-xs font-bold uppercase tracking-[0.15em] text-ink mb-4">
                    Size
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {(["100g", "250g", "500g"] as SizeOption[]).map((opt) => (
                      <PillButton
                        key={opt}
                        label={opt}
                        selected={size === opt}
                        onClick={() => setSize(opt)}
                      />
                    ))}
                  </div>
                </div>

                {/* Grind Selector */}
                <div>
                  <h3 className="font-body text-xs font-bold uppercase tracking-[0.15em] text-ink mb-4 flex justify-between">
                    <span>Grind</span>
                    <button className="text-gold underline underline-offset-4 font-normal normal-case tracking-normal">
                      Grind Guide
                    </button>
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {(
                      [
                        "Whole Bean",
                        "Filter Grind",
                        "Espresso Grind",
                      ] as GrindOption[]
                    ).map((opt) => (
                      <PillButton
                        key={opt}
                        label={opt}
                        selected={grind === opt}
                        onClick={() => setGrind(opt)}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <h3 className="font-body text-xs font-bold uppercase tracking-[0.15em] text-ink mb-4">
                  Quantity
                </h3>
                <QuantityStepper
                  quantity={quantity}
                  onIncrement={() => setQuantity((q) => q + 1)}
                  onDecrement={() => setQuantity((q) => Math.max(1, q - 1))}
                />
              </div>

              {/* Add to Cart Row */}
              <motion.div
                className="mb-8 w-full"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <Button
                  variant="primary"
                  className="w-full"
                  onClick={handleAddToCart}
                >
                  Add to Cart — {formatPrice(currentPrice * quantity)}
                </Button>
              </motion.div>

              {/* Product Description */}
              <p className="font-body text-muted leading-relaxed mb-12">
                {product.description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Circular Coffee Details ── */}
      <section className="pdp-snap-section">
        <CoffeeDetailsCircle product={product} />
      </section>

      {/* ── Section 3: Technical Details & Story ── */}
      <section className="pdp-snap-section">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Technical Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
              viewport={{ once: true, margin: "-80px" }}
            >
              <h2 className="font-display text-3xl text-ink mb-8">
                Technical Details
              </h2>
              <div className="grid grid-cols-2 gap-x-6 gap-y-4 p-6 bg-white shadow-sm border border-border">
                {Object.entries(product.stats).map(([key, value], idx) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <p className="font-body text-[10px] text-muted uppercase tracking-[0.15em] mb-1">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </p>
                    <p className="font-body text-sm font-semibold text-ink">
                      {value}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Accordion */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.15 }}
              viewport={{ once: true, margin: "-80px" }}
            >
              <h2 className="font-display text-3xl text-ink mb-8">The Story</h2>
              <div className="border-t border-ink/10">
                {Object.entries(product.accordion).map(([key, content]) => {
                  const title = key.replace(/([A-Z])/g, " $1").trim();
                  const displayTitle =
                    title.charAt(0).toUpperCase() + title.slice(1);
                  const isOpen = openAccordion === displayTitle;

                  return (
                    <div key={key} className="border-b border-ink/10">
                      <button
                        className="flex justify-between items-center w-full py-5 text-left group"
                        onClick={() => toggleAccordion(displayTitle)}
                      >
                        <span className="font-body text-sm font-bold uppercase tracking-[0.15em] text-ink group-hover:text-gold transition-colors">
                          {displayTitle}
                        </span>
                        <motion.span
                          animate={{ rotate: isOpen ? 45 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="text-ink group-hover:text-gold transition-colors text-xl leading-none"
                        >
                          +
                        </motion.span>
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="pb-6 font-body text-sm text-muted leading-relaxed whitespace-pre-line">
                              {content as string}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
