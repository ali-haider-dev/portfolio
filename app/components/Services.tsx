"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  {
    title: "UI / UX Design",
    description: "Creating intuitive and beautiful user interfaces",
    image: "/service-1.png",
  },
  {
    title: "Web Design",
    description: "Modern and responsive website designs",
    image: "/service-2.png",
  },
  {
    title: "Landing Page",
    description: "High-converting landing page designs",
    image: "/service-3.png",
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="service" className="py-20 px-18 bg-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              My <span className="text-primary">Services</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-white/70 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              bibendum posuere posuere. Vestibulum bibendum.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setActiveIndex(index)}
              className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 overflow-hidden cursor-pointer"
            >
              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl"
                animate={{
                  scale: activeIndex === index ? 1.5 : 1,
                  opacity: activeIndex === index ? 0.3 : 0.1,
                }}
                transition={{ duration: 0.3 }}
              />

              <div className="relative z-10">
                {/* Service Title */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>

                {/* Service Image/Preview */}
                <div className="relative h-64 bg-white/10 rounded-2xl mb-6 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-full h-full bg-linear-to-br from-primary/20 to-accent/10 flex items-center justify-center"
                    >
                      <span className="text-white/30 text-sm">
                        Service Preview
                      </span>
                    </motion.div>
                  </div>
                </div>

                {/* Arrow Icon */}
                <motion.div
                  whileHover={{ x: 5, y: -5 }}
                  className="absolute bottom-6 right-6 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {services.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveIndex(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`h-2 rounded-full transition-all ${
                index === activeIndex
                  ? "w-8 bg-primary"
                  : "w-2 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
