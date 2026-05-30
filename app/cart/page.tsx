"use client";

import { useCartStore } from "@/store/cart";
import { useEffect, useState } from "react";
import EmptyCart from "@/components/cart/EmptyCart";
import CartItems from "@/components/cart/CartItems";
import OrderSummary from "@/components/cart/OrderSummary";

export default function CartPage() {
  const { items } = useCartStore();
  
  // Hydration fix for Zustand persist
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="min-h-screen bg-bg" />;
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-bg">
        <div className="max-w-[1440px] mx-auto pt-12 pb-24">
          <EmptyCart />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 pt-12 pb-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          <CartItems />
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}
