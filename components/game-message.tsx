'use client'

import { useDataContextProvider } from '@/context/data-context-provider'
import React from 'react'

export default function GameMessage() {
  const { message } = useDataContextProvider()

  return (
    <div>
      <p className='text-center text-sm font-bold sm:text-base'>{message}</p>
    </div>
  )
}
