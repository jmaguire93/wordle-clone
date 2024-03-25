import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import DataContextProvider from '@/context/data-context-provider'
import { Toaster } from 'react-hot-toast'

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
          {children}
          <Toaster />
        </body>
      </DataContextProvider>
    </html>
  )
}
