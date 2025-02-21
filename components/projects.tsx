"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    title: "AmDevop Coders",
    description:
      "Empowering the Future of Hardware Learning through innovative Arduino kits with interactive tutorials for beginners.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Amdevop_Coders.jpg-91nzeAjEqtR1TteIeDe7l3WTKekvX2.jpeg",
    technologies: ["Arduino", "Hardware", "Education", "Innovation", "Creation", "Development"],
  },
  {
    title: "Zero Hunger Chatbot (ImpactNow)",
    description:
      "AI-powered chatbot providing SDG-based solutions for zero hunger, leveraging advanced NLP for meaningful impact.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ImpactNow.jpg-vVVczRx498d80YEG4FXVNeqdOcI1TL.jpeg",
    technologies: ["AI", "NLP", "Chatbot", "Social Impact"],
  },
  {
    title: "Solar Energy Innovation",
    description: "Smart solar tracking system with automated panel positioning for maximum energy efficiency.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Solar.jpg-kZiu9HWbpvbs0vteLxlL5vRWoiY7LU.jpeg",
    technologies: ["IoT", "Renewable Energy", "Arduino", "Hardware"],
  },
  {
    title: "Advanced Calculator App",
    description: "JavaFX-powered mathematical application with advanced computational capabilities.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZbnWSzKO7NqXJ6Nlbu5LoXrlUBjwA4.png",
    technologies: ["Java", "JavaFX", "Mathematics"],
  },
  {
    title: "Fire & Drone Expo Project",
    description: "Innovative project showcased at the Fire India 2024 exhibition in Dwarka.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/expo.jpg-GqGowH6xKCM8SkLrJjEiAth4ILpRcq.jpeg",
    technologies: ["Hardware", "Innovation", "Safety", "Robotics"],
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-600 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Innovative Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(0, 255, 255, 0.7)",
                transition: { duration: 0.2 },
              }}
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-cyan-300">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-cyan-900 text-cyan-200 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-gray-900 rounded-lg p-8 max-w-4xl w-full mx-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <Image
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    width={800}
                    height={600}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-3xl font-semibold mb-4 text-cyan-300">{selectedProject.title}</h3>
                  <p className="text-gray-300 mb-6">{selectedProject.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.technologies.map((tech) => (
                      <span key={tech} className="bg-cyan-900 text-cyan-200 px-2 py-1 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <button
                className="mt-6 bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-500 transition-colors"
                onClick={() => setSelectedProject(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

