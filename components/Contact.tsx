"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const CONTACT_EMAIL = "sheryar.j003@gmail.com";
  const GITHUB_URL = "https://github.com/003ZEUS";
  const LINKEDIN_URL =
    "https://www.linkedin.com/in/sheryar-javed-266516292/";
  const DISCORD_HANDLE = "sheraa003";
  const DISCORD_PROFILE_URL = "https://discord.com/users/677482073606586378";

  const openGmailCompose = (subject?: string, body?: string) => {
    const base = "https://mail.google.com/mail/";
    const params = new URLSearchParams({
      view: "cm",
      fs: "1",
      to: CONTACT_EMAIL,
    });

    if (subject) params.set("su", subject);
    if (body) params.set("body", body);

    const url = `${base}?${params.toString()}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = "Portfolio Contact";
    const body = `${message}\n\nFrom: ${email || "your email here"}`;
    openGmailCompose(subject, body);
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

          <div className="mb-6">
            <button
              type="button"
              onClick={() => openGmailCompose()}
              className="text-left glass-panel rounded-xl p-4 border border-neon-purple/20 hover:border-neon-purple/50 transition-all duration-300 hover:shadow-neon-sm w-full"
            >
              <div className="text-xs tracking-wide text-gray-500">EMAIL</div>
              <div className="mt-1 font-medium text-gray-200 break-all">
                {CONTACT_EMAIL}
              </div>
            </button>
          </div>

          <div className="mb-8 flex flex-wrap items-center gap-6">
            {/* Discord */}
            <a
              href={DISCORD_PROFILE_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-full bg-black/60 border border-neon-purple/40 flex items-center justify-center shadow-neon-sm group-hover:bg-neon-purple/10 transition-all duration-300">
                <span className="text-xl group-hover:text-neon-purple-bright transition-colors duration-300">
                  🎮
                </span>
              </div>
              <div className="text-sm text-gray-300 leading-tight">
                <div className="font-semibold">Discord</div>
                <div className="text-gray-500 text-xs">{DISCORD_HANDLE}</div>
              </div>
            </a>

            {/* GitHub */}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-full bg-black/60 border border-neon-purple/40 flex items-center justify-center group-hover:bg-neon-purple/10 transition-all duration-300">
                <svg
                  className="w-5 h-5 text-gray-300 group-hover:text-neon-purple-bright transition-colors duration-300"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 .5C5.73.5.75 5.7.75 12.13c0 5.14 3.33 9.5 7.94 11.04.58.11.79-.26.79-.57 0-.28-.01-1.02-.02-2-3.23.72-3.91-1.6-3.91-1.6-.53-1.38-1.3-1.75-1.3-1.75-1.06-.75.08-.74.08-.74 1.17.08 1.78 1.23 1.78 1.23 1.04 1.82 2.73 1.29 3.4.99.1-.77.41-1.29.74-1.59-2.58-.3-5.29-1.32-5.29-5.86 0-1.3.45-2.36 1.19-3.2-.12-.3-.52-1.52.11-3.16 0 0 .97-.32 3.18 1.22a10.7 10.7 0 0 1 2.9-.4c.98 0 1.97.13 2.9.4 2.21-1.54 3.18-1.22 3.18-1.22.63 1.64.23 2.86.11 3.16.74.84 1.19 1.9 1.19 3.2 0 4.55-2.71 5.56-5.3 5.86.42.37.79 1.1.79 2.22 0 1.6-.02 2.9-.02 3.3 0 .31.21.68.8.56 4.61-1.54 7.94-5.9 7.94-11.04C23.25 5.7 18.27.5 12 .5z" />
                </svg>
              </div>
              <div className="text-sm text-gray-300 leading-tight">
                <div className="font-semibold">GitHub</div>
                <div className="text-gray-500 text-xs">003ZEUS</div>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-full bg-black/60 border border-neon-purple/40 flex items-center justify-center group-hover:bg-neon-purple/10 transition-all duration-300">
                <svg
                  className="w-5 h-5 text-gray-300 group-hover:text-neon-purple-bright transition-colors duration-300"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M4.98 3.5C4.98 4.6 4.1 5.5 3 5.5S1 4.6 1 3.5 1.9 1.5 3 1.5s1.98.9 1.98 2zM1.2 8.25h3.6V22H1.2V8.25zM8.34 8.25h3.45v1.87h.05c.48-.9 1.66-1.85 3.42-1.85 3.66 0 4.34 2.4 4.34 5.52V22h-3.6v-6.3c0-1.5-.03-3.43-2.1-3.43-2.1 0-2.42 1.64-2.42 3.33V22H8.34V8.25z" />
                </svg>
              </div>
              <div className="text-sm text-gray-300 leading-tight">
                <div className="font-semibold">LinkedIn</div>
                <div className="text-gray-500 text-xs">/in/sheryar-javed</div>
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
