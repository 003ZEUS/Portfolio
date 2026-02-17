"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "2D Platformer Game",
    description:
      "Full gameplay implementation including player controller, enemy AI, combat, hazards, and level systems.",
    tech: ["Unity", "C#", "2D"],
  },
  {
    title: "Arc Raiders Inspired Controller System",
    description:
      "Advanced third person controller with camera switching, keyboard and controller support, and combat mechanics.",
    tech: ["Unity", "C#", "3D", "Input System"],
  },
  {
    title: "Block Blast Style Puzzle Game",
    description:
      "Grid-based puzzle game with complete mechanics, scoring system, and mobile architecture.",
    tech: ["Unity", "C#", "Mobile"],
  },
  {
    title: "Flappy Bird Style Game",
    description:
      "Features procedural obstacles, scoring system, restart system, and polished feel.",
    tech: ["Unity", "C#", "2D"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
          Projects
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Featured game development projects and systems
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -5 }}
            className="glass-panel rounded-2xl overflow-hidden border border-neon-purple/20 hover:border-neon-purple/50 transition-all duration-300 group"
          >
            <div className="aspect-video bg-gradient-to-br from-neon-purple/20 to-transparent flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <span className="text-6xl opacity-30 group-hover:opacity-50 transition-opacity">
                🎮
              </span>
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs font-medium bg-neon-purple/30 text-neon-purple-bright rounded-full border border-neon-purple/40"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-purple-bright transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-5 py-2.5 bg-neon-purple/20 border border-neon-purple/50 text-neon-purple-bright font-medium rounded-lg hover:bg-neon-purple/30 hover:shadow-neon transition-all duration-300"
              >
                View Details
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
