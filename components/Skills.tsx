"use client";

import { motion } from "framer-motion";

const gameDevSkills = [
  { name: "Unity", icon: "🎮" },
  { name: "C#", icon: "⚙️" },
  { name: "Gameplay Programming", icon: "🎯" },
  { name: "Game Mechanics", icon: "🔧" },
  { name: "AI Systems", icon: "🤖" },
  { name: "Camera Systems", icon: "📷" },
  { name: "Combat Systems", icon: "⚔️" },
];

const technicalSkills = [
  { name: "Git", icon: "📦" },
  { name: "Optimization", icon: "⚡" },
  { name: "Debugging", icon: "🔍" },
  { name: "Mobile Deployment", icon: "📱" },
  { name: "WebGL", icon: "🌐" },
];

function SkillCard({
  skill,
  index,
}: {
  skill: { name: string; icon: string };
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 0 30px rgba(139, 92, 246, 0.4)",
      }}
      className="glass-panel rounded-xl p-6 border border-neon-purple/20 hover:border-neon-purple/50 transition-all duration-300 cursor-default flex items-center gap-4"
    >
      <span className="text-3xl">{skill.icon}</span>
      <span className="font-medium text-white">{skill.name}</span>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
          Skills
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Core competencies in game development and technical implementation
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto space-y-16">
        <div>
          <h3 className="text-xl font-semibold text-neon-purple-bright mb-6 ml-2">
            Game Development
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {gameDevSkills.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-neon-purple-bright mb-6 ml-2">
            Technical
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {technicalSkills.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i + 7} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
