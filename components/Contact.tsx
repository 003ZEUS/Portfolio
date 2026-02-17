"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const CONTACT_EMAIL = "sheryar.j003@gmail.com";
  const GITHUB_URL = "https://github.com/003ZEUS";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=Portfolio Contact&body=${encodeURIComponent(message)}\n\nFrom: ${encodeURIComponent(email)}`;
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <div className="glass-panel rounded-2xl p-8 md:p-12 glow-border">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-400 mb-8">
            Have a project in mind? Let&apos;s build something together.
          </p>

          <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="glass-panel rounded-xl p-4 border border-neon-purple/20 hover:border-neon-purple/50 transition-all duration-300 hover:shadow-neon-sm"
            >
              <div className="text-xs tracking-wide text-gray-500">EMAIL</div>
              <div className="mt-1 font-medium text-gray-200 break-all">
                {CONTACT_EMAIL}
              </div>
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="glass-panel rounded-xl p-4 border border-neon-purple/20 hover:border-neon-purple/50 transition-all duration-300 hover:shadow-neon-sm"
            >
              <div className="text-xs tracking-wide text-gray-500">GITHUB</div>
              <div className="mt-1 font-medium text-gray-200 break-all">
                github.com/003ZEUS
              </div>
            </a>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-black/40 border border-neon-purple/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple/50 transition-all duration-300"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 bg-black/40 border border-neon-purple/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple/50 transition-all duration-300 resize-none"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 30px rgba(139, 92, 246, 0.5)",
              }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-neon-purple text-white font-semibold rounded-lg hover:bg-neon-purple-bright transition-all duration-300 shadow-neon-sm"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
