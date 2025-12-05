"use client";

import { motion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiFigma,
  SiGit,
} from "react-icons/si";

const skills = [
  { name: "Javascript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Typescript", icon: SiTypescript, color: "#3178C6" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express.js", icon: SiExpress, color: "#000000" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "MongoDB", icon: SiMongodb, color: "#13AA52" },
  { name: "Tailwindcss", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "Git", icon: SiGit, color: "#F1502F" },
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
                  whileHover={{ scale: 1.15 }}
                  className="shrink-0 flex flex-col items-center gap-3 cursor-pointer"
                >
                  <skill.icon size={60} style={{ color: skill.color }} />
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
                  whileHover={{ scale: 1.15 }}
                  className="shrink-0 flex flex-col items-center gap-3 cursor-pointer"
                >
                  <skill.icon size={60} style={{ color: skill.color }} />
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
