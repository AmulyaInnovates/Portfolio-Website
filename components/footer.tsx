"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Amulya Gupta. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-6 flex-wrap">
          <motion.a
            href="https://github.com/AmulyaInnovates"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-cyan-500 transition-colors"
            whileHover={{ scale: 1.1, boxShadow: "0 0 25px rgba(0, 255, 255, 0.7)" }}
            whileTap={{ scale: 0.95 }}
          >
            GitHub
          </motion.a>

          <motion.a
            href="mailto:amulya.gupta.2556@gdgoenkarohini.edu.in"
            className="bg-cyan-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-cyan-500 transition-colors"
            whileHover={{ scale: 1.1, boxShadow: "0 0 25px rgba(0, 255, 255, 0.7)" }}
            whileTap={{ scale: 0.95 }}
          >
            Email
          </motion.a>

          <motion.a
            href="tel:+919560661100"
            className="bg-cyan-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-cyan-500 transition-colors"
            whileHover={{ scale: 1.1, boxShadow: "0 0 25px rgba(0, 255, 255, 0.7)" }}
            whileTap={{ scale: 0.95 }}
          >
            Call
          </motion.a>
        </div>
      </div>
    </footer>
  )
}

