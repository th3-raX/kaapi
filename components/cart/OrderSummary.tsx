"use client";

import { useState } from "react";
import { useCartStore } from "@/store/cart";
import { formatPrice } from "@/lib/utils";
import Button from "@/components/ui/Button";
import { createCheckout } from "@/app/actions";

const FREE_SHIPPING_THRESHOLD = 79900; // ₹799 in paise

export default function OrderSummary() {
  const { subtotal, items } = useCartStore();
  const [promoCode, setPromoCode] = useState("");
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const currentSubtotal = subtotal();
  
  const progressPercent = Math.min((currentSubtotal / FREE_SHIPPING_THRESHOLD) * 100, 100);
  const remainingForFreeShipping = FREE_SHIPPING_THRESHOLD - currentSubtotal;
  const isFreeShipping = currentSubtotal >= FREE_SHIPPING_THRESHOLD;

  const handleCheckout = () => {
    if (items.length === 0) return;
    
    setIsCheckingOut(true);
    
    const storeDomain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || "kaapi-dev-store.myshopify.com";
    
    // Shopify Cart Permalinks use the format: /cart/{variant_id}:{quantity},{variant_id}:{quantity}
    const permalinkItems = items.map(item => {
      // item.variantId is a global ID like "gid://shopify/ProductVariant/47396761436309"
      const numericId = item.variantId.split("/").pop();
      return `${numericId}:${item.quantity}`;
    });
    
    const checkoutUrl = `https://${storeDomain}/cart/${permalinkItems.join(",")}`;
    
    // Redirect directly to Shopify Checkout!
    window.location.href = checkoutUrl;
  };

  return (
    <div className="w-full lg:w-1/3 bg-white p-8 border border-border shadow-sm h-fit sticky top-24">
      <h2 className="font-display text-2xl text-ink mb-6">Order Summary</h2>

      {/* Free Shipping Tracker */}
      <div className="mb-8">
        <p className="font-body text-sm font-semibold mb-3">
          {isFreeShipping ? (
            <span className="text-gold">You've unlocked free shipping!</span>
          ) : (
            <span className="text-ink">
              Add <span className="font-bold">{formatPrice(remainingForFreeShipping)}</span> more for free shipping
            </span>
          )}
        </p>
        <div className="w-full h-1 bg-bg rounded-pill overflow-hidden">
          <div
            className="h-full bg-gold transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Totals */}
      <div className="space-y-4 mb-8">
        <div className="flex justify-between font-body text-sm text-ink/80">
          <span>Subtotal</span>
          <span>{formatPrice(currentSubtotal)}</span>
        </div>
        <div className="flex justify-between font-body text-sm text-ink/80">
          <span>Shipping</span>
          <span>{isFreeShipping ? "Free" : "Calculated at checkout"}</span>
        </div>
        <hr className="border-t border-ink/10 my-4" />
        <div className="flex justify-between font-body font-semibold text-lg text-ink">
          <span>Total</span>
          <span>{formatPrice(currentSubtotal)}</span>
        </div>
      </div>

      {/* Promo Code */}
      <div className="mb-8">
        <p className="font-body text-xs font-bold uppercase tracking-[0.15em] text-ink mb-3">
          Promo Code
        </p>
        <div className="flex gap-2">
          <input
            type="text"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            placeholder="Enter code"
            className="flex-1 bg-bg border border-border px-4 py-3 text-sm font-body text-ink focus:outline-none focus:border-gold transition-colors"
          />
          <Button variant="outline">Apply</Button>
        </div>
      </div>

      <Button 
        variant="primary" 
        className="w-full" 
        onClick={handleCheckout}
        disabled={isCheckingOut || items.length === 0}
      >
        {isCheckingOut ? "Preparing Checkout..." : "Checkout"}
      </Button>
      
      <p className="font-body text-xs text-muted text-center mt-4">
        Taxes and shipping calculated at checkout.
      </p>
    </div>
  );
}
