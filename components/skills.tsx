"use client"

import { motion } from "framer-motion"

const skills = [
  { category: "Programming Languages", items: ["HTML", "CSS", "Java", "JavaScript", "Python"] },
  { category: "Technologies", items: ["TensorFlow", "Flask", "MetaMask", "Arduino", "Linux", "JavaFX", "Dialogflow"] },
  { category: "Tools", items: ["GitHub", "Arduino IDE", "Kali Linux", "VS Code"] },
]

const SkillCard = ({ skill, index }: { skill: string; index: number }) => {
  return (
    <motion.div
      className="bg-gray-800 p-4 rounded-lg shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 30px rgba(0, 255, 255, 0.7)",
        transition: { duration: 0.2 },
      }}
    >
      <motion.h4
        className="text-cyan-400 font-semibold mb-2"
        whileHover={{
          scale: 1.1,
          color: "#ffffff",
          transition: { duration: 0.2 },
        }}
      >
        {skill}
      </motion.h4>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-600 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills & Expertise
        </motion.h2>
        <div className="grid gap-8">
          {skills.map((skillCategory, categoryIndex) => (
            <div key={skillCategory.category}>
              <h3 className="text-2xl font-semibold mb-4 text-cyan-300">{skillCategory.category}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {skillCategory.items.map((skill, index) => (
                  <SkillCard key={skill} skill={skill} index={categoryIndex * 10 + index} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

