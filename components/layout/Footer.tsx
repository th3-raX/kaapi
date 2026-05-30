"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const footerLinks = {
  shop: [
    { href: "/collections", label: "Coffee Beans" },
    { href: "/collections", label: "Brewing Gear" },
    { href: "/collections", label: "Subscriptions" },
    { href: "/collections", label: "Wholesale" },
  ],
  info: [
    { href: "/", label: "Privacy Policy" },
    { href: "/", label: "Terms of Service" },
    { href: "/", label: "Shipping & Returns" },
    { href: "/", label: "Contact Us" },
  ],
} as const;

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, margin: "-80px" }}
      className="bg-dark text-white/70"
    >
      {/* Gold accent line */}
      <div className="h-[2px] bg-gold/30" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand Column */}
          <div>
            <Link
              href="/"
              className="font-display text-gold text-3xl italic tracking-wide"
            >
              Kaapi
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/50 max-w-xs">
              Artisan roasters bringing the soul of South Indian coffee culture
              to the modern connoisseur.
            </p>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="font-body text-xs font-bold uppercase tracking-[0.15em] text-gold mb-6">
              Shop
            </h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-gold transition-colors duration-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info Links */}
          <div>
            <h3 className="font-body text-xs font-bold uppercase tracking-[0.15em] text-gold mb-6">
              Information
            </h3>
            <ul className="space-y-3">
              {footerLinks.info.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-gold transition-colors duration-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-xs text-white/40 uppercase tracking-[0.1em]">
          © {new Date().getFullYear()} Kaapi Specialty Coffee. Artisan
          Roasters.
        </div>
      </div>
    </motion.footer>
  );
}
