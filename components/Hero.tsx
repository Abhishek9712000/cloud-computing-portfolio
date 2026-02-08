'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Download, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-24 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT: Text */}
          <div className="text-center lg:text-left">
            {/* Status Badge (NOT FLOATING) */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6"
            >
              <div className="glass px-4 py-2 rounded-full">
                <span className="text-cyber-green text-sm font-medium">
                  🛡️ Available for Opportunities
                </span>
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-display text-5xl md:text-7xl font-bold mb-6 text-gradient-cyber"
            >
              Hari Krishna
              <br />
              Mahato
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-300 font-medium mb-6"
            >
              Cyber Security Student | SOC Analyst Fresher | Networking & Security Fundamentals
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              Focused on defensive security fundamentals, networking concepts, and hands-on practice using TryHackMe.
              Interested in SOC operations, monitoring, and incident awareness. Actively building skills through
              projects and continuous learning.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
            >
              <a
                href="#projects"
                className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyber-cyan to-cyber-green text-cyber-black font-bold rounded-lg hover:shadow-xl hover:shadow-cyber-cyan/50 transition-all duration-300 hover:scale-[1.02]"
              >
                View Projects
                <ArrowRight size={20} />
              </a>

              {/* Resume: point to a real file in /public/resume/ */}
              <a
                href="/resume/Hari_Krishna_Mahato_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 glass text-gray-200 font-semibold rounded-lg hover:border-cyber-cyan transition-all duration-300"
              >
                <Download size={20} />
                Download Resume
              </a>
            </motion.div>
          </div>

          {/* RIGHT: Profile Image (NO FLOATING DOTS/BUBBLES) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Outer ring */}
              <div className="w-[290px] h-[290px] md:w-[360px] md:h-[360px] rounded-full bg-gradient-to-r from-cyber-cyan to-cyber-green p-[6px] shadow-xl shadow-cyber-cyan/10">
                {/* Inner circle with proper crop */}
                <div className="w-full h-full rounded-full overflow-hidden bg-cyber-black/40 border border-white/10">
                  <Image
                    src="/images/profile.jpg.jpg"  // ✅ your screenshot shows this file name
                    alt="Hari Krishna Mahato"
                    width={720}
                    height={720}
                    priority
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              {/* Optional glow (NOT MOVING) */}
              <div className="absolute inset-0 rounded-full blur-2xl opacity-20 bg-cyber-cyan pointer-events-none" />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-14"
        >
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 mx-auto text-cyber-cyan"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
