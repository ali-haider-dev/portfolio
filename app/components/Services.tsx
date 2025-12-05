"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  {
    title: "Mobile App Development",
    description: "Designing and building seamless, user-friendly mobile applications that engage and delight users.",
    image: "/service-1.jpg",
  },
  {
    title: "Web Development",
    description: "Creating modern, responsive, and high-performance websites tailored to your business needs.",
    image: "/service-2.jpg",
  },
  {
    title: "Landing Page",
    description: "High-converting landing page designs",
    image: "/service-3.jpg",
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
              I craft digital experiences that are visually stunning, highly
              functional, and user-friendly. Check out the services I offer:
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setActiveIndex(index)}
              className="group relative bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/10 overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl"
                animate={{
                  scale: activeIndex === index ? 1.6 : 1,
                  opacity: activeIndex === index ? 0.35 : 0.1,
                }}
                transition={{ duration: 0.3 }}
              />

              <div className="relative z-10">
                {/* Service Title */}
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-white/60 mb-4">{service.description}</p>

                {/* Service Image / Preview */}
                <div className="relative h-64 rounded-2xl overflow-hidden mb-6 shadow-inner">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-primary/20 to-accent/10"
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </motion.div>
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
        <div className="flex justify-center gap-3 mt-12">
          {services.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveIndex(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`h-2 rounded-full transition-all duration-300 ${
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
