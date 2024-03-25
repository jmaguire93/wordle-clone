'use client'

import React, { useCallback, useEffect, useMemo } from 'react'
import Row from './row'
import data from '@/data/dictionary.json'
import { useDataContextProvider } from '@/context/data-context-provider'
import { motion } from 'framer-motion'
import useKeyPress from '@/hooks/useKeyPress'

export default function Board() {
  const rows = [1, 2, 3, 4, 5, 6]
  const { setSolution } = useDataContextProvider()

  const { handleKeyPress } = useKeyPress()

  const generateSolution = useMemo(() => {
    const wordList = data
    const randomIndex = Math.floor(Math.random() * wordList.length)
    return wordList[randomIndex]
  }, [])

  const onKeyPress = useCallback(
    (event: KeyboardEvent) => {
      const key = event.key

      handleKeyPress(key)
    },
    [handleKeyPress]
  )

  useEffect(() => {
    setSolution(generateSolution)
  }, [setSolution, generateSolution])

  useEffect(() => {
    document.addEventListener('keydown', onKeyPress)

    return () => {
      document.removeEventListener('keydown', onKeyPress)
    }
  }, [onKeyPress])

  return (
    <motion.section
      className='flex items-center justify-center max-w-full py-6 px-4'
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.2
      }}
    >
      <div>
        {rows.map((row) => (
          <Row key={row} rowId={row - 1} />
        ))}
      </div>
    </motion.section>
  )
}
