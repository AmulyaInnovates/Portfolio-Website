"use client"

import { motion } from "framer-motion"

export default function ResumeButton() {
  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <motion.a
        href="https://github.com/AmulyaInnovates"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-cyan-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-cyan-500 transition-colors"
        whileHover={{ scale: 1.1, boxShadow: "0 0 25px rgba(0, 255, 255, 0.7)" }}
        whileTap={{ scale: 0.95 }}
      >
        View Github Account
      </motion.a>
    </motion.div>
  )
}

