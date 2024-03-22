'use client'

import { useDataContextProvider } from '@/context/data-context-provider'
import React from 'react'

export default function GameMessage() {
  const { message } = useDataContextProvider()

  return <div className='text-center'>{message}</div>
}
