"use client";

import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/cart";
import { formatPrice } from "@/lib/utils";
import QuantityStepper from "@/components/ui/QuantityStepper";
import ProductImage from "@/components/ui/ProductImage";

export default function CartItems() {
  const { items, updateQuantity, removeItem } = useCartStore();

  return (
    <div className="w-full lg:w-2/3">
      <h1 className="font-display text-4xl text-ink mb-8">Your Cart</h1>
      
      <div className="hidden sm:grid grid-cols-12 gap-4 pb-4 border-b border-ink/10 font-body text-xs font-bold uppercase tracking-[0.15em] text-muted">
        <div className="col-span-6">Product</div>
        <div className="col-span-3 text-center">Quantity</div>
        <div className="col-span-3 text-right">Total</div>
      </div>

      <div className="flex flex-col">
        {items.map((item) => (
          <div
            key={`${item.productId}-${item.size}-${item.grind}`}
            className="grid grid-cols-1 sm:grid-cols-12 gap-4 py-8 border-b border-ink/10 items-center"
          >
            {/* Product Details */}
            <div className="col-span-1 sm:col-span-6 flex gap-6">
              <div className="relative w-24 h-32 bg-ink/5 shrink-0">
                {/* Image or Fallback */}
                <ProductImage
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <div className="flex flex-col justify-center">
                <Link
                  href={`/products/${item.slug}`}
                  className="font-display text-2xl text-ink hover:text-gold transition-colors mb-1"
                >
                  {item.name}
                </Link>
                <p className="font-body text-xs text-muted uppercase tracking-[0.1em] mb-1">
                  {item.size} · {item.grind}
                </p>
                <p className="font-body text-sm font-semibold text-ink sm:hidden mb-4">
                  {formatPrice(item.price)}
                </p>
                
                {/* Mobile Stepper & Remove */}
                <div className="sm:hidden flex items-center gap-4">
                  <QuantityStepper
                    quantity={item.quantity}
                    onIncrement={() =>
                      updateQuantity(item.productId, item.size, item.grind, item.quantity + 1)
                    }
                    onDecrement={() =>
                      updateQuantity(item.productId, item.size, item.grind, item.quantity - 1)
                    }
                    className="scale-90 origin-left"
                  />
                  <button
                    onClick={() => removeItem(item.productId, item.size, item.grind)}
                    className="font-body text-xs text-muted underline underline-offset-4 hover:text-ink"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>

            {/* Desktop Quantity */}
            <div className="hidden sm:flex col-span-3 flex-col items-center gap-2">
              <QuantityStepper
                quantity={item.quantity}
                onIncrement={() =>
                  updateQuantity(item.productId, item.size, item.grind, item.quantity + 1)
                }
                onDecrement={() =>
                  updateQuantity(item.productId, item.size, item.grind, item.quantity - 1)
                }
              />
              <button
                onClick={() => removeItem(item.productId, item.size, item.grind)}
                className="font-body text-[10px] text-muted underline underline-offset-4 hover:text-ink tracking-[0.1em] uppercase mt-2"
              >
                Remove
              </button>
            </div>

            {/* Desktop Total */}
            <div className="hidden sm:block col-span-3 text-right font-body font-semibold text-ink text-lg">
              {formatPrice(item.price * item.quantity)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
