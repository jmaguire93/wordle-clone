import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import DataContextProvider from '@/context/data-context-provider'
import { Toaster } from 'react-hot-toast'
import Celebration from '@/components/celebration'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wordle Clone',
  description: 'Personal project for code practice'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <DataContextProvider>
        <body className={inter.className}>
          <Celebration />
          {children}
          <Toaster
            containerClassName='text-sm'
            toastOptions={{
              duration: 3000
            }}
          />
        </body>
      </DataContextProvider>
    </html>
  )
}
