"use client"

import { Sun, Moon } from "lucide-react"
import { useTheme } from "./ThemeProvider"

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110"
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5">
        <Sun
          size={20}
          className={`absolute inset-0 transition-all duration-300 ${
            isDark ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
          }`}
        />
        <Moon
          size={20}
          className={`absolute inset-0 transition-all duration-300 ${
            isDark ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"
          }`}
        />
      </div>
    </button>
  )
}
