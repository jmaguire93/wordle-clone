'use client'

import React from 'react'
import Key from './key'
import { motion } from 'framer-motion'

export default function Keyboard() {
  const keysRowOne = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']
  const keysRowTwo = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l']
  const keysRowThree = ['Back', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Enter']

  return (
    <motion.section
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.25
      }}
    >
      {[keysRowOne, keysRowTwo, keysRowThree].map((keys, index) => (
        <div
          key={keys[0]}
          className='flex gap-1 p-1 justify-center items-center'
        >
          {keys.map((key) => (
            <Key key={key} id={key} />
          ))}
        </div>
      ))}
    </motion.section>
  )
}
