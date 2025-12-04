"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "Javascript", icon: "🟨" },
  { name: "Typescript", icon: "🔷" },
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "Node.js", icon: "🟢" },
  { name: "Express.js", icon: "⚡" },
  { name: "Nest.js", icon: "🦅" },
  { name: "Socket.io", icon: "🔌" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Sass/Scss", icon: "💅" },
  { name: "Tailwindcss", icon: "🌊" },
  { name: "Figma", icon: "🎨" },
  { name: "Cypress", icon: "🌲" },
  { name: "Storybook", icon: "📚" },
  { name: "Git", icon: "📦" },
];

export default function Skills() {
  // Duplicate skills for seamless loop
  const duplicatedSkills = [...skills, ...skills];

  return (
    <section
      id="skills"
      className="py-20 px-6 bg-background relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-6 py-2 bg-white rounded-full border-2 border-secondary/10 shadow-sm mb-4">
            <span className="text-secondary/70 font-medium">Skills</span>
          </div>
          <p className="text-secondary/70 text-lg max-w-2xl mx-auto">
            The skills, tools and technologies I am really good at:
          </p>
        </motion.div>

        {/* Continuous Scrolling Skills */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-background to-transparent z-10" />

          {/* Scrolling Container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-8"
              animate={{
                x: [0, -1600],
              }}
              transition={{
                x: {
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {duplicatedSkills.map((skill, index) => (
                <motion.div
                  key={`${skill.name}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index % skills.length) * 0.05 }}
                  whileHover={{ scale: 1.1, y: -10 }}
                  className="flex-shrink-0 flex flex-col items-center gap-3 cursor-pointer"
                >
                  <motion.div
                    className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center border border-secondary/10"
                    whileHover={{
                      boxShadow: "0 8px 24px rgba(255, 107, 53, 0.2)",
                      borderColor: "rgba(255, 107, 53, 0.3)",
                    }}
                  >
                    <span className="text-4xl">{skill.icon}</span>
                  </motion.div>
                  <span className="text-sm font-medium text-secondary whitespace-nowrap">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Second Row - Moving in Opposite Direction */}
        <div className="relative mt-8">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-background to-transparent z-10" />

          {/* Scrolling Container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-8"
              animate={{
                x: [-1600, 0],
              }}
              transition={{
                x: {
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {duplicatedSkills.map((skill, index) => (
                <motion.div
                  key={`reverse-${skill.name}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index % skills.length) * 0.05 }}
                  whileHover={{ scale: 1.1, y: -10 }}
                  className="flex-shrink-0 flex flex-col items-center gap-3 cursor-pointer"
                >
                  <motion.div
                    className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center border border-secondary/10"
                    whileHover={{
                      boxShadow: "0 8px 24px rgba(255, 107, 53, 0.2)",
                      borderColor: "rgba(255, 107, 53, 0.3)",
                    }}
                  >
                    <span className="text-4xl">{skill.icon}</span>
                  </motion.div>
                  <span className="text-sm font-medium text-secondary whitespace-nowrap">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
