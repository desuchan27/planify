import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ToasterProvider } from '@/providers/ToasterProvider'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Planify',
  description: 'Your personal event planner',
}



const RootLayout = async ({
  children,
}: {
  children: React.ReactNode
}) => {

  return (
    <html lang="en">
      <body className={inter.className}>
        <ToasterProvider />
        {children}
      </body>
    </html>
  )
}

export default RootLayout