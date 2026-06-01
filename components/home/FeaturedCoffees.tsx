"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { products } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";

const scrollRevealEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const gridContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: scrollRevealEase },
  },
};

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouse = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const resetMouse = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={resetMouse}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  );
}

export default function FeaturedCoffees() {
  // Take first 3 filter-coffee products
  const featured = products
    .filter((p) => p.category === "filter-coffee")
    .slice(0, 3);

  return (
    <section className="py-24 px-6 md:px-16 max-w-[1440px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: scrollRevealEase }}
        viewport={{ once: false, margin: "-80px" }}
        className="mb-12"
      >
        <h2 className="font-display text-4xl text-ink mb-4">
          Curated For You
        </h2>
        <hr className="border-t border-gold/30 w-24" />
      </motion.div>

      <motion.div
        variants={gridContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
      >
        {featured.map((product) => (
          <motion.div
            key={product.id}
            variants={cardVariants}
            whileHover={{
              y: -8,
              boxShadow: "0 20px 60px rgba(28,15,7,0.18)",
            }}
            transition={{ duration: 0.3 }}
          >
            <TiltCard>
              <ProductCard product={product} />
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
