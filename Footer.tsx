"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-neon-purple/20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <p className="text-xl font-bold text-white">Sheryar Javed</p>
        <p className="text-gray-500 text-sm mt-1">Unity Game Developer</p>
        <p className="text-gray-600 text-xs mt-4">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}
