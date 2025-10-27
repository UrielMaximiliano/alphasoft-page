"use client"

import type React from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { useRef, type ReactNode, memo, useCallback } from "react"

interface GlowCardProps {
  children: ReactNode
  className?: string
}

export const GlowCard: React.FC<GlowCardProps> = memo(({ children, className = "" }) => {
  const ref = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 250 }
  const rotateX = useSpring(useMotionValue(0), springConfig)
  const rotateY = useSpring(useMotionValue(0), springConfig)

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const percentX = (e.clientX - centerX) / (rect.width / 2)
      const percentY = (e.clientY - centerY) / (rect.height / 2)

      mouseX.set(e.clientX - rect.left)
      mouseY.set(e.clientY - rect.top)
      rotateY.set(percentX * 8)
      rotateX.set(-percentY * 8)
    },
    [mouseX, mouseY, rotateX, rotateY],
  )

  const handleMouseLeave = useCallback(() => {
    rotateX.set(0)
    rotateY.set(0)
  }, [rotateX, rotateY])

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative ${className}`}
    >
      <motion.div
        className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(500px circle at ${mouseX}px ${mouseY}px, rgba(59, 130, 246, 0.12), transparent 40%)`,
        }}
        animate={{ opacity: 1 }}
      />
      {children}
    </motion.div>
  )
})

GlowCard.displayName = "GlowCard"
