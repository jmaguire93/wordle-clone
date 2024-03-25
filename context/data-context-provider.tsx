'use client'

import type React from 'react'
import { createContext, useContext, useState } from 'react'

type DataContextType = {
  solution: string
  setSolution: React.Dispatch<React.SetStateAction<string>>
  currentRow: number
  setCurrentRow: React.Dispatch<React.SetStateAction<number>>
  guess: string
  setGuess: React.Dispatch<React.SetStateAction<string>>
  attempts: number[]
  setAttempts: React.Dispatch<React.SetStateAction<number[]>>
  doesNotExist: boolean
  setDoesNotExist: React.Dispatch<React.SetStateAction<boolean>>
  isCompleted: boolean
  setIsCompleted: React.Dispatch<React.SetStateAction<boolean>>
}

type DataContextProviderProps = {
  children: React.ReactNode
}

const DataContext = createContext<DataContextType | null>(null)

export default function DataContextProvider({
  children
}: DataContextProviderProps) {
  const [solution, setSolution] = useState<string>('')
  const [currentRow, setCurrentRow] = useState<number>(0)
  const [guess, setGuess] = useState<string>('')
  const [attempts, setAttempts] = useState<number[]>([])
  const [doesNotExist, setDoesNotExist] = useState<boolean>(false)
  const [isCompleted, setIsCompleted] = useState<boolean>(false)

  return (
    <DataContext.Provider
      value={{
        solution,
        setSolution,
        currentRow,
        setCurrentRow,
        guess,
        setGuess,
        attempts,
        setAttempts,
        doesNotExist,
        setDoesNotExist,
        isCompleted,
        setIsCompleted
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export function useDataContextProvider() {
  const context = useContext(DataContext)

  if (!context) {
    throw new Error(
      'useDataContextProvider must be used within the DataContextProvider'
    )
  }

  return context
}
