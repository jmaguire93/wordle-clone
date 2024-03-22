'use client'

import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Row from './row'
import data from '@/data/dictionary.json'
import { useDataContextProvider } from '@/context/data-context-provider'
import { motion } from 'framer-motion'

export default function Board() {
  const rows = [1, 2, 3, 4, 5, 6]
  const {
    solution,
    setSolution,
    currentRow,
    setCurrentRow,
    guess,
    setGuess,
    attempts,
    setAttempts,
    setMessage
  } = useDataContextProvider()
  const [playing, setPlaying] = useState<boolean>(true)

  const generateSolution = useMemo(() => {
    const wordList = data
    const randomIndex = Math.floor(Math.random() * wordList.length)
    return wordList[randomIndex]
  }, [])

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (!playing) return
      setMessage('')

      const key = event.key

      if (!/[a-zA-Z]/.test(key)) {
        return
      }

      if (key === 'Backspace') {
        setGuess(guess.slice(0, -1))
      }

      if (key === 'Enter') {
        if (attempts.length > 5) {
          setMessage('There are no more attempts, please try again.')
          return
        }

        if (guess.length < 5) return
        if (!data.includes(guess.toLowerCase())) {
          setMessage('Sorry, that word is not in the dictionary!')
          return
        }

        if (guess.toLowerCase() === solution.toLowerCase()) {
          setPlaying(false)
          setMessage('Congrats, you have won!')
        } else if (attempts.length === 5) {
          setMessage(`Unlucky, the word was ${solution}! Please try again.`)
        }

        setAttempts([...attempts, currentRow])
        setCurrentRow(currentRow + 1)
        setGuess('')
      }

      if (guess.length >= 5) return

      if (key.length === 1) {
        setGuess(guess.concat(key))
      }
    },
    [
      solution,
      setGuess,
      guess,
      attempts,
      currentRow,
      setCurrentRow,
      setAttempts,
      playing,
      setMessage
    ]
  )

  useEffect(() => {
    setSolution(generateSolution)
  }, [setSolution, generateSolution])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress)

    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [handleKeyPress])

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
