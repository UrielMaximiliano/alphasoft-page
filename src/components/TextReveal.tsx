"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useEffect, useState, memo } from "react"

interface TextRevealProps {
  text: string
  className?: string
  delay?: number
}

export const TextReveal: React.FC<TextRevealProps> = memo(({ text, className = "", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  const words = text.split(" ")

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
          animate={isVisible ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{
            duration: 0.4,
            delay: index * 0.08,
            ease: [0.25, 0.4, 0.25, 1],
          }}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </div>
  )
})

TextReveal.displayName = "TextReveal"
