"use client"

import type React from "react"
import { memo } from "react"
import { motion } from "framer-motion"
import { Code2, Sparkles, Zap, Cpu } from "lucide-react"

export const FloatingIcons: React.FC = memo(() => {
  const icons = [
    { Icon: Code2, delay: 0, x: "15%", y: "25%" },
    { Icon: Sparkles, delay: 1.5, x: "85%", y: "20%" },
    { Icon: Zap, delay: 3, x: "20%", y: "75%" },
    { Icon: Cpu, delay: 4.5, x: "80%", y: "70%" },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute text-blue-500/15 dark:text-blue-400/15 will-change-transform"
          style={{ left: x, top: y }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.15, 0.3, 0.15],
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <Icon size={32} />
        </motion.div>
      ))}
    </div>
  )
})

FloatingIcons.displayName = "FloatingIcons"
