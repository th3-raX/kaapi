"use client";

import { useState } from "react";
import ProductImage from "@/components/ui/ProductImage";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { useCartStore } from "@/store/cart";
import { formatPrice } from "@/lib/utils";
import Button from "@/components/ui/Button";
import PillButton from "@/components/ui/PillButton";
import FlavorPill from "@/components/ui/FlavorPill";
import QuantityStepper from "@/components/ui/QuantityStepper";

type SizeOption = "100g" | "250g" | "500g";
type GrindOption = "Whole Bean" | "Filter Grind" | "Espresso Grind";

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const addItem = useCartStore((state) => state.addItem);

  // Form State
  const [size, setSize] = useState<SizeOption>("250g");
  const [grind, setGrind] = useState<GrindOption>("Filter Grind");
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Accordion State
  const [openAccordion, setOpenAccordion] = useState<string | null>("About Estate");

  // Dynamic Price
  const currentPrice = product.price[size];

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
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
    // In a real app, we might open the cart drawer here
  };

  const toggleAccordion = (title: string) => {
    setOpenAccordion((prev) => (prev === title ? null : title));
  };

  return (
    <div className="min-h-screen bg-bg">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-12">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 font-body text-xs text-muted uppercase tracking-[0.1em] mb-8">
          <Link href="/" className="hover:text-ink transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/collections" className="hover:text-ink transition-colors">
            {product.category.replace("-", " ")}
          </Link>
          <span>/</span>
          <span className="text-ink font-semibold">{product.name}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left: Image Gallery (Sticky on desktop) */}
          <div className="w-full lg:w-[55%] lg:sticky lg:top-24 flex lg:justify-center">
            <div className="flex flex-col gap-4 w-full max-w-[500px]">
              {/* Main Image */}
              <div className="relative aspect-square bg-ink/5 overflow-hidden w-full">
                <ProductImage
                  src={product.images[activeImageIndex]}
                  alt={`${product.name} main view`}
                  fill
                  className="object-cover transition-opacity duration-300"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>
              
              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-4 w-full">
                {product.images.map((src, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative aspect-square overflow-hidden transition-all duration-300 ${
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
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="w-full lg:w-[45%] flex flex-col">
            {/* Header */}
            <div className="mb-6">
              <h1 className="font-display text-4xl md:text-5xl text-ink mb-2">
                {product.name}
              </h1>
              <p className="font-body text-sm text-muted uppercase tracking-[0.15em] mb-4">
                {product.estate}
              </p>
              <p className="font-body text-2xl font-semibold text-ink mb-6">
                {formatPrice(currentPrice)}
              </p>
              
              <div className="flex flex-wrap gap-x-3 gap-y-2">
                {product.flavourNotes.map((note, idx) => (
                  <span key={note} className="flex items-center">
                    <FlavorPill label={note} />
                    {idx < product.flavourNotes.length - 1 && (
                      <span className="text-muted/50 ml-3">|</span>
                    )}
                  </span>
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
                  {(["Whole Bean", "Filter Grind", "Espresso Grind"] as GrindOption[]).map(
                    (opt) => (
                      <PillButton
                        key={opt}
                        label={opt}
                        selected={grind === opt}
                        onClick={() => setGrind(opt)}
                      />
                    )
                  )}
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
            <div className="mb-8 w-full">
              <Button
                variant="primary"
                className="w-full"
                onClick={handleAddToCart}
              >
                Add to Cart — {formatPrice(currentPrice * quantity)}
              </Button>
            </div>

            {/* Product Description */}
            <p className="font-body text-muted leading-relaxed mb-12">
              {product.description}
            </p>

            {/* Technical Stats Grid */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-4 mb-12 p-6 bg-white shadow-sm border border-border">
              {Object.entries(product.stats).map(([key, value]) => (
                <div key={key}>
                  <p className="font-body text-[10px] text-muted uppercase tracking-[0.15em] mb-1">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </p>
                  <p className="font-body text-sm font-semibold text-ink">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            {/* Accordion */}
            <div className="border-t border-ink/10">
              {Object.entries(product.accordion).map(([key, content]) => {
                const title = key.replace(/([A-Z])/g, " $1").trim();
                const displayTitle = title.charAt(0).toUpperCase() + title.slice(1);
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
                      <span className="text-ink group-hover:text-gold transition-colors text-xl leading-none">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="pb-6 font-body text-sm text-muted leading-relaxed whitespace-pre-line animate-in fade-in slide-in-from-top-2 duration-300">
                        {content}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
