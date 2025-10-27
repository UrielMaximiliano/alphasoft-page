<<<<<<< HEAD
"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import ThemeToggle from "./ThemeToggle"

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
=======
import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import logo from '../assets/logo.jpg';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
>>>>>>> 3035ea6b2dfdb5997717f89439d9803707140dab
      } else {
        setIsScrolled(false)
      }
<<<<<<< HEAD
    }
=======

      const sections = ['services', 'about', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(current || '');
    };
>>>>>>> 3035ea6b2dfdb5997717f89439d9803707140dab

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
<<<<<<< HEAD
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-700/20 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <motion.div className="flex items-center" whileHover={{ scale: 1.05 }}>
            <a href="#" className="flex items-center gap-2 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-8 h-8 rounded-lg overflow-hidden bg-white dark:bg-gray-900"
              >
                <img src="/logo.jpg" alt="AlphaSoft Logo" className="w-full h-full object-cover" />
              </motion.div>
              <span className="font-bold text-xl text-gray-900 dark:text-white">AlphaSoft</span>
=======
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 shadow-lg shadow-gray-200/50 dark:shadow-black/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative w-11 h-11 rounded-xl overflow-hidden group-hover:scale-110 transition-all duration-300 ring-2 ring-gray-200 dark:ring-gray-700 group-hover:ring-blue-400 dark:group-hover:ring-blue-500">
                  <img
                    src={logo}
                    alt="AlphaSoft Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <span className="font-black text-2xl bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-cyan-600 dark:group-hover:from-blue-400 dark:group-hover:to-cyan-400 transition-all duration-300">
                  AlphaSoft
                </span>
              </div>
>>>>>>> 3035ea6b2dfdb5997717f89439d9803707140dab
            </a>
          </motion.div>

<<<<<<< HEAD
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { name: "Servicios", href: "#services" },
              { name: "Nosotros", href: "#about" },
              { name: "Contacto", href: "#contact" },
            ].map((item, index) => (
              <motion.a
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, color: "#3B82F6" }}
                href={item.href}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {item.name}
              </motion.a>
            ))}
            <ThemeToggle />
            <motion.a
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="btn btn-primary"
            >
=======
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {[
              { href: '#services', label: 'Servicios' },
              { href: '#about', label: 'Nosotros' },
              { href: '#contact', label: 'Contacto' }
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 font-semibold rounded-lg transition-all duration-300 ${
                  activeSection === item.href.substring(1)
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {item.label}
                {activeSection === item.href.substring(1) && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-600 dark:bg-blue-400"></div>
                )}
              </a>
            ))}
            <div className="ml-2">
              <ThemeToggle />
            </div>
            <a
              href="#contact"
              className="ml-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-bold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
            >
              <Sparkles size={16} />
>>>>>>> 3035ea6b2dfdb5997717f89439d9803707140dab
              Comenzar
            </motion.a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <motion.button
              whileTap={{ scale: 0.9 }}
              type="button"
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg focus:outline-none transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
<<<<<<< HEAD
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
=======
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
>>>>>>> 3035ea6b2dfdb5997717f89439d9803707140dab
          </div>
        </div>
      </div>

<<<<<<< HEAD
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200/20 dark:border-gray-700/20 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-3">
              {[
                { name: "Servicios", href: "#services" },
                { name: "Nosotros", href: "#about" },
                { name: "Contacto", href: "#contact" },
              ].map((item, index) => (
                <motion.a
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  href={item.href}
                  className="block py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                href="#contact"
                className="block w-full text-center py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Comenzar
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
=======
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-gray-200 dark:border-gray-800 shadow-2xl">
          <div className="px-6 py-6 space-y-2">
            {[
              { href: '#services', label: 'Servicios' },
              { href: '#about', label: 'Nosotros' },
              { href: '#contact', label: 'Contacto' }
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`block py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                  activeSection === item.href.substring(1)
                    ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block w-full text-center py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-bold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Comenzar Proyecto
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
>>>>>>> 3035ea6b2dfdb5997717f89439d9803707140dab

export default Navbar
