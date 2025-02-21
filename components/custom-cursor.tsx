"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", mouseMove)

    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: "rgba(0, 255, 255, 0.3)",
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      mixBlendMode: "difference",
    },
  }

  useEffect(() => {
    const textElements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, button, a, span")

    const mouseEnter = () => setCursorVariant("text")
    const mouseLeave = () => setCursorVariant("default")

    textElements.forEach((elem) => {
      elem.addEventListener("mouseenter", mouseEnter)
      elem.addEventListener("mouseleave", mouseLeave)
    })

    return () => {
      textElements.forEach((elem) => {
        elem.removeEventListener("mouseenter", mouseEnter)
        elem.removeEventListener("mouseleave", mouseLeave)
      })
    }
  }, [])

  return (
    <motion.div
      className="custom-cursor"
      variants={variants}
      animate={cursorVariant}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.5,
      }}
    />
  )
}

