"use client"

import { motion } from "framer-motion"

const achievements = [
  {
    title: "National-Level Chatbot Competition",
    description: "1st Rank",
    icon: "🏆",
  },
  {
    title: "Observation Research Foundation",
    description: "Presented with Sunjoy Joshi",
    icon: "🎤",
  },
  {
    title: "Fire and Drone Expo",
    description: "Participated at Yashobhumi (Dwarka)",
    icon: "🚀",
  },
  {
    title: "FIIT-JEE Exam",
    description: "Participated at DTU",
    icon: "🧠",
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-600 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Achievements
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              className="bg-gray-800 rounded-lg p-6 flex items-start space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(0, 255, 255, 0.5)",
              }}
            >
              <div className="text-4xl">{achievement.icon}</div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-cyan-300">{achievement.title}</h3>
                <p className="text-gray-300">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

