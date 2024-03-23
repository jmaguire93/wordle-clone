'use client'

import { useDataContextProvider } from '@/context/data-context-provider'
import { motion } from 'framer-motion'
import React, { useCallback, useEffect, useMemo, useState } from 'react'

type TileProps = {
  rowId: number
  tileId: number
}

const tileAnimationVariants = {
  animate: {
    rotateX: 0
  },
  completed: (index: number) => ({
    rotateX: 360,
    transition: {
      duration: 0.5 * index
    }
  }),
  incorrect: {
    x: [-10, 10, -10, 10, 0],
    transition: { duration: 0.3, repeat: 1 }
  }
}

export default function Tile({ rowId, tileId }: TileProps) {
  const {
    currentRow,
    attempts,
    guess,
    solution,
    doesNotExist,
    setDoesNotExist,
    isCompleted
  } = useDataContextProvider()
  const [color, setColor] = useState<string>('')
  const [letter, setLetter] = useState<string>('')
  const [tileCompleted, setTileCompleted] = useState<boolean>(false)
  const splitSolution = useMemo(() => solution.split(''), [solution])

  const changeColours = useCallback(() => {
    if (splitSolution.includes(letter)) {
      if (splitSolution[tileId] === letter) {
        if (isCompleted) {
          setTileCompleted(true)
        }
        setColor('bg-green-400')
      } else {
        setColor('bg-yellow-400')
      }
    } else {
      setColor('bg-gray-400')
    }
  }, [letter, tileId, splitSolution, isCompleted])

  useEffect(() => {
    if (currentRow === rowId) {
      setLetter(guess[tileId])
      setColor('bg-gray-100')
    }

    if (attempts.includes(rowId)) {
      changeColours()
    }
  }, [currentRow, rowId, guess, tileId, attempts, changeColours])

  return (
    <motion.div
      className={`flex items-center justify-center h-12 w-12 sm:h-20 shadow-lg sm:w-20 border border-black mb-2 ${color}`}
      variants={tileAnimationVariants}
      animate={
        tileCompleted && currentRow - 1 === rowId
          ? 'completed'
          : doesNotExist && currentRow === rowId
            ? 'incorrect'
            : ''
      }
      custom={tileId + 1}
      onAnimationComplete={() => {
        setDoesNotExist(false)
      }}
    >
      <p className='text-2xl uppercase'>{letter}</p>
    </motion.div>
  )
}
