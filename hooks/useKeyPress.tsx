import { useDataContextProvider } from '@/context/data-context-provider'
import data from '@/data/dictionary.json'

export default function useKeyPress() {
  const {
    solution,
    currentRow,
    setCurrentRow,
    guess,
    setGuess,
    attempts,
    setAttempts,
    setMessage,
    setDoesNotExist,
    isCompleted,
    setIsCompleted
  } = useDataContextProvider()

  const handleKeyPress = (key: string) => {
    if (isCompleted) return
    setMessage('')

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
        setDoesNotExist(true)
        setMessage('Sorry, that word is not in the dictionary!')
        return
      }

      if (guess.toLowerCase() === solution.toLowerCase()) {
        setIsCompleted(true)
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
      setGuess(guess.concat(key.toLowerCase()))
    }
  }

  return { handleKeyPress }
}
