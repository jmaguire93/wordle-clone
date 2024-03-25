'use client'

import useKeyPress from '@/hooks/useKeyPress'
import React from 'react'

type KeyProps = {
  id: string
}

export default function Key({ id }: KeyProps) {
  const { handleKeyPress } = useKeyPress()

  const onKeyPress = (key: string) => {
    let mappedKey = key
    if (key === 'Back') {
      mappedKey = 'Backspace'
    }

    return handleKeyPress(mappedKey)
  }

  return (
    <div
      onKeyDown={() => onKeyPress(id)}
      onClick={() => onKeyPress(id)}
      className='text-sm sm:text-base py-4 px-2 border-2 border-black cursor-pointer bg-gray-100'
    >
      {id}
    </div>
  )
}
