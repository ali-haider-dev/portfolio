"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-32 pb-20 px-6 md:px-18 relative"
    >
      <div className="max-w-7xl w-full">
        <div className="relative">
          {/* Background Glow */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
            w-[480px] h-[480px] bg-linear-to-br from-primary/30 to-accent/20 
            rounded-full blur-[120px]"
          />

          <div className="relative grid md:grid-cols-2 gap-16 items-center">
            {/* LEFT SIDE */}
            <div className="space-y-10">
              {/* Hello Badge */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white 
                rounded-full border border-secondary/30 shadow-md"
                >
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

              {/* Heading */}
              <div className="space-y-3">
                <motion.h1
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-5xl md:text-7xl font-extrabold text-secondary leading-tight"
                >
                  I&apos;m <span className="text-primary">Ali Haider</span>,
                </motion.h1>

                <motion.h2
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-4xl md:text-6xl font-bold text-secondary/90"
                >
                  A Software Engineer.
                </motion.h2>
              </div>

              {/* Tagline */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="max-w-md"
              >
                <p className="text-secondary/70 leading-relaxed text-lg">
                  I specialize in frontend development, creating fast,
                  accessible, and high-performance web interfaces with modern
                  technologies and clean design principles.
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-6"
              >
                <motion.a
                  href="/ali-haider-Resume.pdf"
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-primary text-white rounded-full font-medium 
                  flex items-center gap-3 shadow-xl hover:shadow-2xl transition-all"
                >
                  Download Resume <Download className="w-5 h-5" />
                </motion.a>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-secondary border-2 border-secondary 
                  rounded-full font-medium shadow-lg transition-all hover:bg-secondary 
                  hover:text-white"
                >
                  Hire me
                </motion.button>
              </motion.div>
            </div>

            {/* RIGHT SIDE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Orange Gradient Background Circle */}
                <div className="absolute inset-0 bg-linear-to-br from-primary to-accent rounded-full" />

                {/* Placeholder for Image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-[85%] h-[85%] rounded-full overflow-hidden shadow-lg">
                    <Image
                      src="/heroImage.png"
                      alt="Profile Image"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority
                      className="object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
