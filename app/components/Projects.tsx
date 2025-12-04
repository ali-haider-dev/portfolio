"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Lirante",
    subtitle: "Food Delivery Solution",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.",
    category: "Product Design",
    image: "/project-1.png",
  },
  {
    id: 2,
    title: "Creative Agency",
    subtitle: "Brand Identity Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.",
    category: "Landing Page",
    image: "/project-2.png",
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    subtitle: "Shopping Experience",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.",
    category: "Animation",
    image: "/project-3.png",
  },
  {
    id: 4,
    title: "Dashboard UI",
    subtitle: "Analytics Platform",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.",
    category: "Glassmorphism",
    image: "/project-4.png",
  },
];

const categories = [
  "Landing Page",
  "Product Design",
  "Animation",
  "Glassmorphism",
  "Cards",
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("Landing Page");

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="project" className="py-20 px-18 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex justify-center items-center mb-12">
          <div className="flex flex-row gap-5 flex-wrap justify-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-secondary"
            >
              {["Lets", "have", "a", "look", "at"].map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="inline-block mr-3"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.7,
                type: "spring",
                bounce: 0.4,
              }}
              className="text-4xl md:text-5xl font-bold text-primary"
            >
              my Portfolio
            </motion.h2>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative mb-12">
          <div className="overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="relative h-[500px] bg-white rounded-3xl shadow-xl overflow-hidden"
              >
                {/* Project Preview Image Placeholder */}
                <div className="absolute inset-0 bg-linear-to-br from-secondary/5 to-primary/5 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl font-bold text-secondary/10 mb-4">
                      {projects[currentIndex].title}
                    </div>
                    <p className="text-secondary/30 text-lg">Project Preview</p>
                  </div>
                </div>

                {/* Project Title Overlay */}
                <div className="absolute bottom-8 left-8 z-10">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-5xl font-bold text-secondary mb-2"
                  >
                    {projects[currentIndex].title}
                  </motion.h3>
                </div>

                {/* Arrow Button */}
                <motion.button
                  whileHover={{ scale: 1.1, rotate: -45 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute bottom-8 right-8 w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg z-10"
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
                </motion.button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all z-20"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all z-20"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-primary"
                    : "w-2 bg-secondary/30 hover:bg-secondary/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? "bg-secondary text-white shadow-lg"
                  : "bg-white text-secondary border border-secondary/20 hover:border-primary hover:text-primary"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Project Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <h3 className="text-3xl font-bold text-secondary">
              {projects[currentIndex].title} - {projects[currentIndex].subtitle}
            </h3>
            <motion.div
              whileHover={{ scale: 1.1, rotate: -45 }}
              className="w-12 h-12 bg-primary rounded-full flex items-center justify-center cursor-pointer"
            >
              <svg
                className="w-5 h-5 text-white"
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
          <p className="text-secondary/70 text-lg leading-relaxed">
            {projects[currentIndex].description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
