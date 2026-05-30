import Link from "next/link";
import ProductImage from "@/components/ui/ProductImage";
import { type Product } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import FlavorPill from "@/components/ui/FlavorPill";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  // Use the 250g price as the display price
  const displayPrice = product.price["250g"];

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
