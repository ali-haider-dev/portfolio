"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "Information technology services",
    period: "Sep 2025 - Present",
    role: "Trainee Software Engineer",
    description: [
      "Learning and implementing full-stack development concepts with a focus on modern web technologies.",
      "Developed a dynamic website using Next.js, applying React-based server-side rendering and routing.",
      "Gained hands-on experience with SQL for database management and data querying.",
      "Currently learning PHP to strengthen backend development skills and integrate with relational databases",
      "Collaborating with team members to understand software development life cycle (SDLC) and best coding practices.",
    ],
    color: "primary",
  },
  {
    company: "Stallyons Technologies",
    period: "Feb 2025 – May 2025",
    role: "React Native Developer",
    description: [
      "Developed responsive and user-friendly mobile app interfaces using React Native, ensuring smooth user experience across both Android and iOS platforms.",
      "Integrated RESTful APIs to fetch and manage dynamic data, enhancing app functionality and performance.",
      "Collaborated with backend teams to test and troubleshoot API endpoints for seamless front-end integration.",
      "Optimized UI components for performance and reusability, following React Native best practices.",
      "Utilized tools like Postman and Axios for API testing and implementation within React Native applications.",
    ],
    color: "secondary",
  },
  {
    company: "Kudu consulting LLC",
    period: "July 2024 - Sep 2024",
    role: "React Native Intern",
    description: [
      "Developed pixel-perfect UI components, ensuring responsive and high-quality designs across devices.",
      "Implemented custom hooks to optimize code reusability and maintain cleaner code architecture.",
      "Integrated Firebase for backend services, including authentication, database management, and cloud storage.",
    ],
    color: "primary",
  },
];

export default function WorkExperience() {
  return (
    <section id="resume" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-secondary">
            My <span className="text-primary">Work Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-secondary/20 -translate-x-1/2 hidden md:block" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Left Side - Company Info */}
                  <motion.div
                    whileHover={{ x: -10 }}
                    className={`${
                      index % 2 === 0 ? "md:text-right" : "md:order-2"
                    }`}
                  >
                    <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-2">
                      {exp.company}
                    </h3>
                    <p className="text-secondary/60">{exp.period}</p>
                  </motion.div>

                  {/* Center Dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 hidden md:block">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                      className={`w-6 h-6 rounded-full border-4 border-white shadow-lg ${
                        exp.color === "primary" ? "bg-primary" : "bg-secondary"
                      }`}
                    />
                  </div>

                  {/* Right Side - Role & Description */}
                  <motion.div
                    whileHover={{ x: 10 }}
                    className={`${index % 2 === 0 ? "md:order-2" : ""}`}
                  >
                    <h4 className="text-2xl md:text-3xl font-bold text-secondary mb-3">
                      {exp.role}
                    </h4>
                    {exp.description &&
                      (Array.isArray(exp.description) ? (
                        <ul className="list-disc list-outside ml-5 text-secondary/70 leading-relaxed space-y-1">
                          {exp.description.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-secondary/70 leading-relaxed">
                          {exp.description}
                        </p>
                      ))}
                  </motion.div>
                </div>

                {/* Mobile Dot */}
                <div className="md:hidden absolute left-0 top-0">
                  <div
                    className={`w-4 h-4 rounded-full ${
                      exp.color === "primary" ? "bg-primary" : "bg-secondary"
                    }`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
