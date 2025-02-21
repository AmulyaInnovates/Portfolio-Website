"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-purple-600 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-cyan-300">Background</h3>
            <motion.p
              className="text-gray-300 mb-4"
              whileHover={{
                scale: 1.05,
                color: "#ffffff",
                textShadow: "0 0 8px rgba(0, 255, 255, 0.7)",
                transition: { duration: 0.2 },
              }}
            >
              As a young and passionate full-stack developer, I've been exploring the vast world of technology since an
              early age. My journey in tech started with a fascination for hardware and has evolved into a deep love for
              coding and artificial intelligence.
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-cyan-300">Passion</h3>
            <motion.p
              className="text-gray-300 mb-4"
              whileHover={{
                scale: 1.05,
                color: "#ffffff",
                textShadow: "0 0 8px rgba(0, 255, 255, 0.7)",
                transition: { duration: 0.2 },
              }}
            >
              I'm driven by the desire to innovate and create technology that makes a positive impact. From developing
              AI-powered chatbots to crafting hardware solutions, I'm always eager to take on new challenges and push
              the boundaries of what's possible in tech.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

