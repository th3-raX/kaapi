"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import VideoBackground from "@/components/ui/VideoBackground";

const scrollRevealEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: scrollRevealEase },
  },
};

const offerings = [
  {
    region: "PERU",
    desc: "Peru offers some of the best offerings for us to enjoy. Known for care and craftsmanship, these offerings are sure to be enjoyed.",
    videoSrc: "/videos/spring_peru.mp4",
  },
  {
    region: "HONDURAS",
    desc: "Honduran coffee is known for its smooth, balanced profile, thanks to the country’s diverse microclimates and high-altitude growing regions.",
    videoSrc: "/videos/spring_honduras.mp4",
  },
  {
    region: "COLOMBIA",
    desc: "Known for innovation and resilience, Colombia's coffee history dates back to the early 19th century.",
    videoSrc: "/videos/spring_colombia.mp4",
  },
];

export default function SpringOfferings() {
  return (
    <section className="py-24 bg-bg text-ink overflow-hidden border-b border-ink/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: scrollRevealEase }}
          viewport={{ once: true, margin: "-10%" }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="font-display text-5xl md:text-6xl text-ink mb-6">
            Spring Offerings
          </h2>
          <p className="font-body text-lg text-ink/70 leading-relaxed mb-8">
            See our latest offerings from around the world, brought straight to you. Keep up to date with new coffee launches by signing up for our weekly release newsletter.
          </p>
          <Link href="/collections">
            <button className="bg-transparent border border-ink text-ink font-body font-bold text-sm uppercase tracking-[0.1em] px-8 py-3 hover:bg-ink hover:text-white transition-colors">
              Learn More
            </button>
          </Link>
        </motion.div>

        {/* 3-Column Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          {offerings.map((offering) => (
            <motion.div
              key={offering.region}
              variants={cardVariants}
              className="group relative flex flex-col items-center text-center"
            >
              <div className="w-full aspect-[3/4] relative overflow-hidden rounded-t-[50%] mb-8">
                <motion.div 
                  className="absolute inset-0 w-full h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <VideoBackground
                    src={offering.videoSrc}
                    overlay="bg-ink/20 group-hover:bg-ink/10 transition-colors duration-500"
                  />
                </motion.div>
                
                {/* Center text overlay on card */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-white pointer-events-none z-10">
                  <h3 className="font-display text-4xl lg:text-5xl mb-4 drop-shadow-md">
                    {offering.region}
                  </h3>
                  <p className="font-body text-sm text-white/90 leading-relaxed max-w-[250px] drop-shadow-md">
                    {offering.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
