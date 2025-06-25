"use client"

import { useEffect, useRef, useState } from "react"

type Particle = {
  x: number
  y: number
  size: number
  speed: number
  text: string
  opacity: number
  color: string
  type: "keyword" | "snippet" | "symbol"
}

const programmingTerms = [
  "function",
  "const",
  "let",
  "async",
  "await",
  "return",
  "import",
  "export",
  "class",
  "interface",
  "type",
  "useState",
  "useEffect",
  "component",
  "props",
  "React",
  "Node.js",
  "TypeScript",
  "API",
  "REST",
  "GraphQL",
  "MongoDB",
  "PostgreSQL",
  "Docker",
  "AWS",
  "Git",
  "CI/CD",
  "DevOps",
  "JavaScript",
  "Python",
  "Java",
  "HTML",
  "CSS",
  "SCSS",
  "Tailwind",
  "Next.js",
  "Express",
  "Prisma",
  "Redux",
  "Zustand",
]

const codeSnippets = [
  "const [state, setState] = useState()",
  "useEffect(() => {}, [])",
  "export default function() {}",
  "import React from 'react'",
  "interface Props {}",
  "type State = {}",
  "async function fetchData() {}",
  "await fetch('/api')",
  "return <Component />",
  "props.children",
  "event => {}",
  "try {} catch(e) {}",
  "new Promise((resolve) => {})",
  ".then(data => {})",
  ".catch(error => {})",
  "array.map(item => {})",
  "array.filter(item => {})",
  "array.reduce((acc, val) => {}, 0)",
  "npm install",
  "git commit -m",
  "docker build .",
  "kubectl apply -f",
]

const symbols = [
  "<div>",
  "</div>",
  "</>",
  "=>",
  "&&",
  "||",
  "===",
  "!==",
  "try {",
  "catch {",
  "finally {",
  "{ }",
  "[ ]",
  "( )",
  "++",
  "--",
  "+=",
  "-=",
  "*=",
  "/=",
  "??",
  "?.",
  "...",
  "${",
  "}",
]

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number>(0)
  const isInitializedRef = useRef(false)

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current
        const { width, height } = canvas.getBoundingClientRect()

        // Set canvas dimensions to match display size
        canvas.width = width * window.devicePixelRatio
        canvas.height = height * window.devicePixelRatio

        // Scale the context to match device pixel ratio
        const ctx = canvas.getContext("2d")
        if (ctx) {
          ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
        }

        setDimensions({ width: canvas.width, height: canvas.height })

        // Reinitialize particles when resizing
        if (isInitializedRef.current) {
          initializeParticles()
        }
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Initialize particles
  const initializeParticles = () => {
    if (!canvasRef.current) return

    const { width, height } = canvasRef.current
    const actualWidth = width / window.devicePixelRatio
    const actualHeight = height / window.devicePixelRatio
    const particles: Particle[] = []
    const particleCount = Math.min(Math.floor((actualWidth * actualHeight) / 25000), 120) // Increased density

    for (let i = 0; i < particleCount; i++) {
      const rand = Math.random()
      let text: string
      let type: "keyword" | "snippet" | "symbol"
      let size: number
      let opacity: number

      if (rand < 0.4) {
        // Keywords - 40%
        text = programmingTerms[Math.floor(Math.random() * programmingTerms.length)]
        type = "keyword"
        size = 16 + Math.random() * 8 // 16-24px
        opacity = 0.15 + Math.random() * 0.25 // 15-40%
      } else if (rand < 0.7) {
        // Code snippets - 30%
        text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
        type = "snippet"
        size = 14 + Math.random() * 6 // 14-20px
        opacity = 0.12 + Math.random() * 0.18 // 12-30%
      } else {
        // Symbols - 30%
        text = symbols[Math.floor(Math.random() * symbols.length)]
        type = "symbol"
        size = 18 + Math.random() * 10 // 18-28px
        opacity = 0.2 + Math.random() * 0.3 // 20-50%
      }

      particles.push({
        x: Math.random() * actualWidth,
        y: Math.random() * actualHeight,
        size,
        speed: 0.3 + Math.random() * 0.7, // Slightly faster
        text,
        opacity,
        color: "#fbbf24",
        type,
      })
    }

    particlesRef.current = particles
    isInitializedRef.current = true
  }

  // Animation loop
  useEffect(() => {
    if (!canvasRef.current || dimensions.width === 0) return

    initializeParticles()

    const animate = () => {
      if (!canvasRef.current) return

      const canvas = canvasRef.current
      const ctx = canvas.getContext("2d")
      if (!ctx) return

      const actualWidth = canvas.width / window.devicePixelRatio
      const actualHeight = canvas.height / window.devicePixelRatio

      ctx.clearRect(0, 0, actualWidth, actualHeight)

      // Update and draw particles
      particlesRef.current.forEach((particle) => {
        // Update position
        particle.y += particle.speed
        if (particle.y > actualHeight + 50) {
          particle.y = -50
          particle.x = Math.random() * actualWidth
        }

        // Get colors based on particle type (always dark theme)
        let color: string
        switch (particle.type) {
          case "keyword":
            color = `rgba(251, 191, 36, ${particle.opacity})` // Amber
            break
          case "snippet":
            color = `rgba(52, 211, 153, ${particle.opacity})` // Emerald
            break
          case "symbol":
            color = `rgba(196, 181, 253, ${particle.opacity})` // Purple
            break
        }

        // Draw text with enhanced styling using system monospace fonts
        ctx.save()
        ctx.font = `${particle.size}px 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Source Code Pro', 'Menlo', 'Consolas', monospace`
        ctx.fillStyle = color
        ctx.textAlign = "left"
        ctx.textBaseline = "top"

        // Add subtle glow effect for better visibility
        if (particle.type === "symbol" || particle.opacity > 0.3) {
          ctx.shadowColor = color
          ctx.shadowBlur = 2
        }

        ctx.fillText(particle.text, particle.x, particle.y)
        ctx.restore()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationRef.current)
    }
  }, [dimensions])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.9 }} // Increased overall opacity
    />
  )
}
