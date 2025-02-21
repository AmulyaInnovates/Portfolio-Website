"use client"

import { motion } from "framer-motion"

const educationData = [
  {
    title: "High School",
    institution: "GD Goenka School",
    year: "2014 - Present",
    description: "School- Pursuing Class 10th",
  },
]

const certifications = [
  {
    title: "Machine Learning Specialization",
    issuer: "Coursera",
    year: "2023",
  },
  {
    title: "Web Development Bootcamp",
    issuer: "Udemy",
    year: "2022",
  },
  {
    title: "Arduino Fundamentals",
    issuer: "Arduino.cc",
    year: "2021",
  },
  {
    title: "Cloud Engineering",
    issuer: "Google Cloud",
    year: "2024",
  },
  {
    title: "Securing Your Network with Cloud Armour",
    issuer: "Google Cloud",
    year: "2024",
  },
  {
    title: "Applied Data: Blockchain",
    issuer: "Google Cloud",
    year: "2024",
  },
  {
    title: "Intro to ML: Image Processing",
    issuer: "Google Cloud",
    year: "2024",
  },
  {
    title: "Baseline: Data, ML, and AI",
    issuer: "Google Cloud",
    year: "2024",
  },
  {
    title: "Java Developer",
    issuer: "Codingal",
    year: "2024",
    date: "December 17, 2024",
  },
  {
    title: "Game Developer",
    issuer: "WhiteHat Jr",
    year: "2020",
  },
  {
    title: "Android & iOS App Developer",
    issuer: "WhiteHat Jr",
    year: "2021",
  },
  {
    title: "Introduction to Networking",
    issuer: "NVIDIA",
    year: "2024",
  },
  {
    title: "Kali Linux",
    issuer: "Board Infinity",
    year: "2024",
  },
  {
    title: "Applied ChatGPT for Cybersecurity & Cyber Threat Hunting",
    issuer: "Infosec",
    year: "2024",
  },
  {
    title: "Introduction to Cybersecurity Fundamentals",
    issuer: "Coursera Instructor Network",
    year: "2024",
  },
  {
    title: "What is the Metaverse?",
    issuer: "Meta",
    year: "2024",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-600 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Education & Certifications
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-cyan-300">Education</h3>
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.title}
                className="bg-gray-800 rounded-lg p-6 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(0, 255, 255, 0.5)",
                }}
              >
                <h4 className="text-xl font-semibold mb-2 text-cyan-400">{edu.title}</h4>
                <p className="text-gray-300 mb-2">{edu.institution}</p>
                <p className="text-gray-400 mb-2">{edu.year}</p>
                <p className="text-gray-300">{edu.description}</p>
              </motion.div>
            ))}
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-cyan-300">Certifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  className="bg-gray-800 rounded-lg p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 10,
                    boxShadow: "0 0 25px rgba(0, 255, 255, 0.5)",
                  }}
                >
                  <h4 className="text-lg font-semibold mb-2 text-cyan-400">{cert.title}</h4>
                  <p className="text-gray-300 mb-1">{cert.issuer}</p>
                  <p className="text-gray-400">{cert.year}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

