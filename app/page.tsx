import type { Metadata } from "next"
import HomeContent from "./HomeContent"

export const metadata: Metadata = {
  title: "Amulya Gupta - Full Stack Developer & Tech Innovator",
  description: "Portfolio of Amulya Gupta, a brilliant full-stack developer, AI enthusiast, and hardware innovator.",
  keywords: "full-stack developer, AI, hardware innovation, portfolio, Amulya Gupta",
}

export default function Home() {
  return <HomeContent />
}

