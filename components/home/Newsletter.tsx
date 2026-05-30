"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-24 bg-dark text-white text-center">
      <div className="max-w-xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          viewport={{ once: false, margin: "-80px" }}
          className="font-display text-4xl text-gold mb-4"
        >
          Join the Ritual
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.2 }}
          viewport={{ once: false, margin: "-80px" }}
          className="font-body text-white/70 mb-10"
        >
          Subscribe for early access to micro-lots, brewing guides, and exclusive
          releases.
        </motion.p>

        {submitted ? (
          <div className="py-4 font-display text-2xl italic text-gold">
            You&apos;re in. Welcome to the club.
          </div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.35 }}
            viewport={{ once: false, margin: "-80px" }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 bg-transparent border-b border-white/30 px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors font-body"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gold text-dark font-body text-sm font-bold uppercase tracking-[0.1em] px-8 py-3 hover:bg-gold/90 transition-colors"
            >
              Subscribe
            </motion.button>
          </motion.form>
        )}
      </div>
    </section>
  );
}
