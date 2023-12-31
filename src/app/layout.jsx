import { Inter } from 'next/font/google'
import './globals.css'
import { QuioscoProvider } from '@/context/QuioscoProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Quiosco App',
  description: 'Quiosco app es una aplicación que te ayudará a gestionar tu quiosco',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QuioscoProvider>
          {children}
        </QuioscoProvider>
      </body>
    </html>
  )
}
