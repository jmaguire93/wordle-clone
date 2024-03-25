'use client'

import { useDataContextProvider } from '@/context/data-context-provider'
import React, { useEffect, useState } from 'react'
import Confetti from 'react-confetti'

export default function Celebration() {
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 })
  const { isCompleted } = useDataContextProvider()

  useEffect(() => {
    const handleWindowResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    handleWindowResize()

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  if (!isCompleted) {
    return null
  }

  return (
    <Confetti
      recycle={false}
      width={screenSize.width}
      height={screenSize.height}
    />
  )
}
