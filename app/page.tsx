import Footer from '@/components/footer'
import Board from '@/components/board'
import GameMessage from '@/components/game-message'
import RestartButton from '@/components/restart-button'

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <main className='flex-1 flex flex-col items-center justify-center p-4 sm:p-20'>
        <h1 className='text-3xl sm:text-5xl font-semibold mb-4'>Wordle</h1>
        <RestartButton />
        <Board />
        <GameMessage />
      </main>
      <Footer />
    </div>
  )
}
