"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (canvasRef.current) {
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
      const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true })
      renderer.setSize(window.innerWidth, window.innerHeight)

      const particles = new THREE.BufferGeometry()
      const particleCount = 5000

      const posArray = new Float32Array(particleCount * 3)

      for (let i = 0; i < particleCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 5
      }

      particles.setAttribute("position", new THREE.BufferAttribute(posArray, 3))

      const material = new THREE.PointsMaterial({
        size: 0.005,
        color: 0x6366f1,
      })

      const particleMesh = new THREE.Points(particles, material)
      scene.add(particleMesh)

      camera.position.z = 2

      const animate = () => {
        requestAnimationFrame(animate)
        particleMesh.rotation.x += 0.0001
        particleMesh.rotation.y += 0.0001
        renderer.render(scene, camera)
      }

      animate()

      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
      }

      window.addEventListener("resize", handleResize)

      return () => {
        window.removeEventListener("resize", handleResize)
      }
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 z-0" />
}

