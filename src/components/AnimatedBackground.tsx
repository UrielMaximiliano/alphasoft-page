"use client"

import { useEffect, useRef, memo } from "react"
import { motion } from "framer-motion"

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
    }> = []

    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.4 + 0.2,
      })
    }

    let animationFrameId: number
    let lastTime = 0
    const fps = 30 // Limit to 30fps for better performance

    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTime

      if (deltaTime > 1000 / fps) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        particles.forEach((particle) => {
          // Update position
          particle.x += particle.speedX
          particle.y += particle.speedY

          // Wrap around screen
          if (particle.x < 0) particle.x = canvas.width
          if (particle.x > canvas.width) particle.x = 0
          if (particle.y < 0) particle.y = canvas.height
          if (particle.y > canvas.height) particle.y = 0

          // Draw particle
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`
          ctx.fill()
        })

        lastTime = currentTime
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate(0)

    let resizeTimeout: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }, 250)
    }

    window.addEventListener("resize", handleResize, { passive: true })

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", handleResize)
      clearTimeout(resizeTimeout)
    }
  }, [])

  return (
    <>
      {/* Canvas for particle network */}
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ opacity: 0.3 }} />

      <motion.div
        className="fixed top-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-15 will-change-transform"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.6) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, 80, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <motion.div
        className="fixed bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-15 will-change-transform"
        style={{
          background: "radial-gradient(circle, rgba(147,51,234,0.6) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, -80, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
          delay: 5,
        }}
      />

      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed w-2 h-2 bg-blue-500/20 rounded-full will-change-transform"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            delay: Math.random() * 3,
          }}
        />
      ))}

      {/* Grid overlay */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)] pointer-events-none" />
    </>
  )
}

export default memo(AnimatedBackground)
