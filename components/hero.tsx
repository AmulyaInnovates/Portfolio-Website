"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const textVariants = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
  }),
}

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
}

const nameAnimation = {
  animate: {
    y: [0, -10, 10, 0], // Moves up and down, with slight vibration
    transition: {
      duration: 5,
      ease: "easeInOut",
      repeat: Number.POSITIVE_INFINITY,
    },
  },
}

export default function Hero() {
  const title = "Full Stack Developer & Tech Innovator"

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="text-center z-10">
        <div className="flex items-center justify-center mb-8">
          <motion.div
            className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-cyan-400 mr-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 1 }}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Me.png-EC5hmpPDmuDza9A1Nzzg8to4Xih9Zv.webp"
              alt="Amulya Gupta"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            variants={nameAnimation}
            animate="animate"
            className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 text-transparent bg-clip-text relative"
          >
            Amulya Gupta
          </motion.div>
        </div>
        <motion.h2
          className="text-2xl md:text-4xl text-cyan-200 mb-8"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          {title.split("").map((char, index) => (
            <motion.span key={`${char}-${index}`} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
        </motion.h2>
        <motion.p
          className="text-xl text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Crafting cutting-edge digital experiences with expertise in web development, AI-ML, and IoT.
        </motion.p>
      </div>
    </section>
  )
}

