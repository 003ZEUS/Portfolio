"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 animated-gradient-bg" />
      <div className="absolute inset-0 cyberpunk-grid" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-purple-bright/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-soft-purple-glow/10 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            Sheryar{" "}
            <span className="bg-gradient-to-r from-neon-purple to-neon-purple-bright bg-clip-text text-transparent">
              Javed
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-neon-purple-bright"
          >
            Unity Game Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            &ldquo;I build polished gameplay systems, mechanics, and complete
            games in Unity.&rdquo;
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          >
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-neon-purple text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-neon hover:shadow-neon-purple/50"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-neon-purple-bright opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-neon-purple text-neon-purple-bright font-semibold rounded-lg hover:bg-neon-purple/10 transition-all duration-300 hover:shadow-neon-sm"
            >
              Contact Me
            </a>
            <a
              href="/Sheryar-Javed-FlowCV-Resume-20260217.pdf"
              download
              className="px-8 py-4 border-2 border-neon-purple/60 text-gray-200 font-semibold rounded-lg hover:bg-neon-purple/10 transition-all duration-300 hover:shadow-neon-sm"
            >
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-neon-purple/50 rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1 h-2 bg-neon-purple rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
