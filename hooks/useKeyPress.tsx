'use client'

import { useDataContextProvider } from '@/context/data-context-provider'
import data from '@/data/dictionary.json'
import toast from 'react-hot-toast'

export default function useKeyPress() {
  const {
    solution,
    currentRow,
    setCurrentRow,
    guess,
    setGuess,
    attempts,
    setAttempts,
    setDoesNotExist,
    isCompleted,
    setIsCompleted
  } = useDataContextProvider()

  const handleKeyPress = (key: string) => {
    if (isCompleted) return

    if (!/[a-zA-Z]/.test(key)) {
      return
    }

    if (key === 'Backspace') {
      setGuess(guess.slice(0, -1))
    }

    if (key === 'Enter') {
      if (attempts.length > 5) {
        toast('You have no more attempts, please try again.', {
          icon: '👀'
        })
        return
      }

      if (guess.length < 5) return
      if (!data.includes(guess.toLowerCase())) {
        setDoesNotExist(true)
        toast.error('Sorry, that word is not in the dictionary!', {
          icon: '📖'
        })
        return
      }

      if (guess.toLowerCase() === solution.toLowerCase()) {
        setIsCompleted(true)
        toast('Congrats, you have won!', {
          icon: '👏'
        })
      } else if (attempts.length === 5) {
        toast(
          () => (
            <span>
              Unlucky, the word was <b>{solution}</b>! Please try again
            </span>
          ),
          {
            icon: '😏'
          }
        )
      }

      setAttempts([...attempts, currentRow])
      setCurrentRow(currentRow + 1)
      setGuess('')
    }

    if (guess.length >= 5) return

    if (key.length === 1) {
      setGuess(guess.concat(key.toLowerCase()))
    }
  }

  return { handleKeyPress }
}
