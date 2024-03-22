'use client'

import { useDataContextProvider } from '@/context/data-context-provider'
import React, { useEffect, useMemo, useState } from 'react'

type TileProps = {
  rowId: number
  tileId: number
}

export default function Tile({ rowId, tileId }: TileProps) {
  const { currentRow, attempts, guess, solution } = useDataContextProvider()
  const [color, setColor] = useState<string>('')
  const [letter, setLetter] = useState<string>('')
  const splitSolution = useMemo(() => solution.split(''), [solution])

  const changeColours = () => {
    if (splitSolution.includes(letter)) {
      if (splitSolution[tileId] === letter) {
        setColor('bg-green-400')
      } else {
        setColor('bg-yellow-400')
      }
    } else {
      setColor('bg-gray-400')
    }
  }

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
    <div
      className={`flex items-center justify-center h-12 w-12 sm:h-20 shadow-lg sm:w-20 border border-black mb-2 ${color}`}
    >
      <p className='text-2xl uppercase'>{letter}</p>
    </div>
  )
}
