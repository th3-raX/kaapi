"use client";

import Link from "next/link";
import { useCartStore } from "@/store/cart";
import ProductImage from "@/components/ui/ProductImage";
import { type Product } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import FlavorPill from "@/components/ui/FlavorPill";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((s) => s.addItem);
  // Use the 250g price as the display price
  const displayPrice = product.price["250g"];

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    const size = "250g";
    const grind = "Filter Grind";
    const sizeStr = size.toUpperCase();
    const variant = product.shopifyVariants?.find(
      (v) => v.title.includes(sizeStr) && v.title.includes(grind)
    );

    addItem({
      productId: product.id,
      variantId: variant ? variant.id : "",
      slug: product.slug,
      name: product.name,
      size,
      grind,
      price: displayPrice,
      quantity: 1,
      image: product.images[0],
    });
  };

  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <div className="relative aspect-[4/5] mb-4 bg-ink/5 overflow-hidden">
        <ProductImage
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover object-center transition-transform duration-slow group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 pointer-events-none group-hover:translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 z-10">
          <button 
            className="w-full bg-dark text-white font-body font-bold text-sm uppercase tracking-[0.1em] py-3 hover:bg-ink/80 transition-colors"
            onClick={handleQuickAdd}
          >
            Quick Add
          </button>
        </div>
      </div>

      <div className="flex justify-between items-start gap-4 mb-2">
        <div>
          <h3 className="font-display text-2xl text-ink leading-tight">
            {product.name}
          </h3>
          <p className="font-body text-xs text-muted uppercase tracking-[0.1em] mt-1">
            {product.stats.roastLevel} Roast
          </p>
        </div>
        <div className="font-body text-sm font-semibold text-ink text-right">
          {formatPrice(displayPrice)}
        </div>
      </div>

      <div className="flex flex-wrap gap-x-2 gap-y-1">
        {product.flavourNotes.map((note, idx) => (
          <span key={note} className="flex items-center">
            <FlavorPill label={note} />
            {idx < product.flavourNotes.length - 1 && (
              <span className="text-muted/50 ml-2">|</span>
            )}
          </span>
        ))}
      </div>
    </Link>
  );
}
