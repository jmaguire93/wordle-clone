import Footer from '@/components/footer'
import Board from '@/components/board'
import GameMessage from '@/components/game-message'
import RestartButton from '@/components/restart-button'
import Header from '@/components/header'
import Keyboard from '@/components/keyboard'

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-1 items-center p-2 sm:p-4'>
        <RestartButton />
        <Board />
        <Keyboard />
        <GameMessage />
      </main>
      <Footer />
    </div>
  )
}
