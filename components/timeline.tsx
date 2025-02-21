"use client"

import { useRef } from "react"
import { motion, useScroll } from "framer-motion"

const timelineItems = [
  {
    year: "2023",
    title: "Founder of AmDevop Coders",
    description: "Launched innovative Arduino kits with interactive tutorials for beginners.",
  },
  {
    year: "2023",
    title: "IIT Kanpur Competition Winner",
    description: "Developed a groundbreaking tech-driven solution for sustainable energy management.",
  },
  {
    year: "2022",
    title: "National Level Blockchain Speaker",
    description: "Delivered an insightful talk on Blockchain technology and its real-world applications.",
  },
  {
    year: "2022",
    title: "FIIT-JEE Scholarship Recipient",
    description: "Excelled in the scholarship exam for Science, Math, Physics, Chemistry, and Biology.",
  },
  {
    year: "2021",
    title: "Commenced Class 9 at GD Goenka School",
    description: "Focused on STEM, IT, and competitive programming, laying the foundation for future innovations.",
  },
]

export default function Timeline() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  return (
    <section id="timeline" ref={ref} className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-10 gradient-text"
      >
        Journey & Achievements
      </motion.h2>
      <div className="relative max-w-3xl mx-auto">
        <motion.div
          className="absolute left-9 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-indigo-600"
          style={{ scaleY: scrollYProgress }}
        />
        {timelineItems.map((item, index) => (
          <motion.div
            key={index}
            className="mb-8 flex items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex-shrink-0 w-24 text-right mr-8">
              <span className="font-bold text-gray-400">{item.year}</span>
            </div>
            <motion.div
              className="flex-grow p-4 bg-gray-800 rounded-lg shadow-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="font-bold mb-1 text-indigo-400">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

