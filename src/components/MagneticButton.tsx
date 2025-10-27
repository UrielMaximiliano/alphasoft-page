"use client"

import type React from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { useRef, type ReactNode, memo } from "react"

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  type?: "button" | "submit" | "reset"
  disabled?: boolean
}

export const MagneticButton: React.FC<MagneticButtonProps> = memo(
  ({ children, className = "", onClick, type = "button", disabled = false }) => {
    const ref = useRef<HTMLButtonElement>(null)
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const springConfig = { damping: 20, stiffness: 200 }
    const springX = useSpring(x, springConfig)
    const springY = useSpring(y, springConfig)

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!ref.current || disabled) return
      const rect = ref.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      x.set((e.clientX - centerX) * 0.25)
      y.set((e.clientY - centerY) * 0.25)
    }

    const handleMouseLeave = () => {
      x.set(0)
      y.set(0)
    }

    return (
      <motion.button
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ x: springX, y: springY }}
        className={className}
        onClick={onClick}
        type={type}
        disabled={disabled}
        whileHover={{ scale: disabled ? 1 : 1.03 }}
        whileTap={{ scale: disabled ? 1 : 0.97 }}
      >
        {children}
      </motion.button>
    )
  },
)

MagneticButton.displayName = "MagneticButton"
