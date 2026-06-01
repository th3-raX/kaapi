"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import VideoBackground from "@/components/ui/VideoBackground";

const scrollRevealEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function DualGrid() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      {/* Left Card: Box Sets */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: scrollRevealEase }}
        viewport={{ once: true, margin: "-10%" }}
        className="group relative aspect-square md:aspect-auto md:h-[80vh] overflow-hidden"
      >
        <motion.div 
          className="absolute inset-0 w-full h-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <VideoBackground
            src="/videos/dual_grid_box_sets.mp4"
            overlay="bg-dark/50 group-hover:bg-dark/40 transition-colors duration-500"
          />
        </motion.div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-10">
          <h2 className="font-body font-bold text-3xl md:text-4xl text-white uppercase tracking-wide mb-6 drop-shadow-md">
            BOX SETS
          </h2>
          <p className="font-body text-white/90 text-sm md:text-base max-w-sm leading-relaxed mb-8 drop-shadow-sm">
            Want to try more than just one offering from us? Explore our box sets for smaller sample packs or even a collection of our most recent releases and beloved blends!
          </p>
          <Link href="/collections">
            <button className="bg-transparent border border-white text-white font-body font-bold text-sm uppercase tracking-[0.1em] px-8 py-3 hover:bg-white hover:text-dark transition-colors">
              See Box Sets
            </button>
          </Link>
        </div>
      </motion.div>

      {/* Right Card: Terroir */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: scrollRevealEase, delay: 0.2 }}
        viewport={{ once: true, margin: "-10%" }}
        className="group relative aspect-square md:aspect-auto md:h-[80vh] overflow-hidden"
      >
        <motion.div 
          className="absolute inset-0 w-full h-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <VideoBackground
            src="/videos/dual_grid_terroir.mp4"
            overlay="bg-dark/50 group-hover:bg-dark/40 transition-colors duration-500"
          />
        </motion.div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-10">
          <h2 className="font-body font-bold text-3xl md:text-4xl text-white uppercase tracking-wide mb-6 drop-shadow-md">
            TERROIR
          </h2>
          <p className="font-body text-white/90 text-sm md:text-base max-w-sm leading-relaxed mb-8 drop-shadow-sm">
            Enjoy the world of specialty sourced chocolate from Terroir! We have something for everyone and can&apos;t wait to share the sweet goodness with you.
          </p>
          <Link href="/collections">
            <button className="bg-transparent border border-white text-white font-body font-bold text-sm uppercase tracking-[0.1em] px-8 py-3 hover:bg-white hover:text-dark transition-colors">
              Explore Chocolate
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
