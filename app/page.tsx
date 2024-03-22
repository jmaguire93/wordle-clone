import Footer from '@/components/footer'
import Board from '@/components/board'
import GameMessage from '@/components/game-message'
import RestartButton from '@/components/restart-button'
import Header from '@/components/header'

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-1 flex flex-col items-center p-4 sm:p-6'>
        <RestartButton />
        <Board />
        <GameMessage />
      </main>
      <Footer />
    </div>
  )
}
