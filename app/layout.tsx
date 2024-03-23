import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import DataContextProvider from '@/context/data-context-provider'

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
        <body className={`${inter.className} relative`}>
          <div className='bg-[#fbe2e3] -z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-3/4 sm:-translate-y-1/2 h-[30rem] w-[30rem] rounded-full blur-[10rem]' />
          {children}
        </body>
      </DataContextProvider>
    </html>
  )
}
