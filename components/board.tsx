'use client'

import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Row from './row'
import data from '@/data/dictionary.json'
import { useDataContextProvider } from '@/context/data-context-provider'

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

      if (!(/[a-zA-Z]/.test(key) || (key !== 'Backspace' && key !== 'Enter'))) {
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
    <div className='flex items-center justify-center w-full p-4'>
      <div>
        {rows.map((row) => (
          <Row key={row} rowId={row - 1} />
        ))}
      </div>
    </div>
  )
}
