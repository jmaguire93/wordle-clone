'use client'

import { motion } from 'framer-motion'
import React from 'react'

export default function Footer() {
  return (
    <footer className='mb-8 px-4 text-center text-gray-500'>
      <motion.section
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.3
        }}
      >
        <small className='mb-2 block text-xs'>&copy; 2024 wordle-clone</small>
        <p className='text-xs'>
          Built by Josh. Uses React, TypeScript, Tailwind CSS, hosted using
          Vercel.
        </p>
      </motion.section>
    </footer>
  )
}
