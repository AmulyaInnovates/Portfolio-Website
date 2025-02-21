"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const words = ["Innovation", "Design", "Create"]

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [showWelcome, setShowWelcome] = useState(false)
  const [currentWord, setCurrentWord] = useState(0)

  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (progress < 70) {
          setProgress((prev) => prev + 1)
        } else if (progress < 100) {
          setProgress((prev) => prev + 0.5)  // Increased speed from 0.2 to 0.5
        } else {
          setShowWelcome(true)
          setTimeout(() => {
            document.body.style.overflow = "auto"
            // Hide the welcome message after 1 second
            setTimeout(() => setShowWelcome(false), 1000)
          }, 1000)
        }
      },
      progress < 70 ? 50 : 30,  // Reduced time to speed up from 70% to 100%
    )

    return () => clearTimeout(timer)
  }, [progress])

  useEffect(() => {
    const wordTimer = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 2000)

    document.body.style.overflow = "hidden"
    return () => clearInterval(wordTimer)
  }, [])

  return (
    <AnimatePresence>
      {progress < 100 || showWelcome ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {showWelcome ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="text-6xl font-bold text-cyan-400"
              key="welcome"
            >
              Welcome!!!
            </motion.div>
          ) : (
            <div className="w-full max-w-md px-4">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative">
                <div className="absolute -top-20 w-full text-center">
                  <motion.span
                    key={words[currentWord]}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="text-2xl font-bold text-cyan-400"
                  >
                    {words[currentWord]}
                  </motion.span>
                </div>
                <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-cyan-400 to-purple-600"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div className="mt-2 text-center text-cyan-400">{Math.round(progress)}%</div>
              </motion.div>
            </div>
          )}
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

