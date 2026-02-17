"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "Unity 2D and 3D", icon: "🎮" },
  { name: "C#", icon: "⚙️" },
  { name: "Input System", icon: "🎯" },
  { name: "Camera Systems", icon: "📷" },
  { name: "Combat Systems", icon: "⚔️" },
  { name: "Enemy AI", icon: "🤖" },
  { name: "Boss Design", icon: "👹" },
  { name: "UI Systems", icon: "🖥️" },
  { name: "Mobile and PC Games", icon: "📱" },
  { name: "WebGL Builds", icon: "🌐" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="glass-panel rounded-2xl p-8 md:p-12 glow-border overflow-hidden">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            Unity game developer specializing in gameplay programming.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            Experience building complete games from scratch. Strong focus on
            mechanics, systems, and game feel.
          </p>

          <h3 className="text-xl font-semibold text-neon-purple-bright mb-4">
            Experience with:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 text-gray-300"
              >
                <span className="text-xl">{skill.icon}</span>
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
