"use client";

import Link from "next/link";
import { useCartStore } from "@/store/cart";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/collections", label: "Coffee" },
  { href: "/collections", label: "Merchandise" },
  { href: "/", label: "Our Story" },
  { href: "/", label: "Cafes" },
] as const;

export default function Header() {
  const totalItems = useCartStore((s) => s.totalItems());
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [prevCount, setPrevCount] = useState(0);
  const [pop, setPop] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Cart badge pop animation
  useEffect(() => {
    if (totalItems > prevCount) {
      setPop(true);
      const timer = setTimeout(() => setPop(false), 300);
      return () => clearTimeout(timer);
    }
    setPrevCount(totalItems);
  }, [totalItems, prevCount]);

  useEffect(() => {
    setPrevCount(totalItems);
  }, [totalItems]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 bg-dark">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-gold text-2xl italic tracking-wide"
        >
          Kaapi
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-body text-sm text-white/80 uppercase tracking-[0.1em] hover:text-gold transition-colors duration-base"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: Cart + Hamburger */}
        <div className="flex items-center gap-4">
          {/* Cart Icon */}
          <Link href="/cart" className="relative group">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white/80 group-hover:text-gold transition-colors duration-base"
            >
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            {mounted && totalItems > 0 && (
              <motion.span
                animate={pop ? { scale: [1, 1.4, 1] } : { scale: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute -top-2 -right-2 bg-gold text-dark text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center"
              >
                {totalItems}
              </motion.span>
            )}
          </Link>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 cursor-pointer"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-[1.5px] bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`}
            />
            <span
              className={`w-6 h-[1.5px] bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`w-6 h-[1.5px] bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 top-16 bg-dark z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-display text-3xl text-white/80 hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
