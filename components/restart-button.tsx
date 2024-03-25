'use client'

import { motion } from 'framer-motion'
import React from 'react'

export default function RestartButton() {
  return (
    <motion.div
      className='text-center'
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.15
      }}
    >
      <button
        className='text-sm px-2 py-1 sm:px-4 sm:py-2 sm:text-base bg-blue-500 border-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md border hover:scale-[1.05] active:scale-110 transition-all'
        onClick={() => window.location.reload()}
        type='button'
      >
        Restart
      </button>
    </motion.div>
  )
}
