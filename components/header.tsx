'use client'

import { motion } from 'framer-motion'
import React from 'react'

export default function Header() {
  return (
    <header className='text-center pt-8 sm:pt-16'>
      <motion.section
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h1 className='text-3xl sm:text-5xl font-semibold mb-4'>Wordle</h1>
      </motion.section>
    </header>
  )
}
