"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-32 pb-20 px-18"
    >
      <div className="max-w-7xl w-full">
        <div className="relative">
          {/* Background Circle */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-linear-to-br from-primary/30 to-accent/20 rounded-full blur-3xl"
          />

          <div className="relative grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Hello Badge */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border-2 border-secondary shadow-md">
                  <motion.span
                    animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                    className="text-2xl"
                  >
                    👋
                  </motion.span>
                  <span className="font-medium text-secondary">Hello</span>
                </div>
              </motion.div>

              {/* Main Heading */}
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-5xl md:text-7xl font-bold text-secondary leading-tight"
                >
                  I&apos;m <span className="text-primary">Jenny</span>,
                </motion.h1>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-4xl md:text-6xl font-bold text-secondary mt-2"
                >
                  Product Designer
                </motion.h2>
              </div>

              {/* Testimonial */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-start gap-3 max-w-md"
              >
                <div className="text-3xl text-primary">&ldquo;</div>
                <p className="text-secondary/70 leading-relaxed">
                  Jenny delivered an outstanding design that ensured our
                  website&apos;s success. Highly Recommended.
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <motion.a
                  href="/ali-haider-Resume.pdf"
                  download
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 8px 24px rgba(255, 107, 53, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-primary text-white rounded-full font-medium flex items-center gap-2 shadow-lg transition-all cursor-pointer"
                >
                  Download Resume
                  <Download className="w-5 h-5" />
                </motion.a>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-secondary rounded-full font-medium border-2 border-secondary shadow-lg transition-all hover:bg-secondary hover:text-white"
                >
                  Hire me
                </motion.button>
              </motion.div>
            </div>

            {/* Right Content - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Orange Circle Background */}
                <div className="absolute inset-0 bg-linear-to-br from-primary to-accent rounded-full" />

                {/* Placeholder for image */}
                <div className="absolute inset-0 flex items-end justify-center">
                  <div className="w-full h-full bg-linear-to-b from-transparent to-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-white/50 text-sm">
                      Add your image here
                    </span>
                  </div>
                </div>

                {/* Experience Badge */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -right-4 top-1/4 bg-white rounded-2xl p-6 shadow-xl"
                >
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 + i * 0.1 }}
                        className="text-primary text-xl"
                      >
                        ⭐
                      </motion.span>
                    ))}
                  </div>
                  <div className="text-4xl font-bold text-secondary">
                    10 Years
                  </div>
                  <div className="text-secondary/60 text-sm">Experience</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
