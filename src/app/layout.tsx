import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ToasterProvider } from '@/providers/ToasterProvider'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { SessionProvider } from '@/components/SessionProvider'


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

  const session = await getServerSession()

  return (
    <html lang="en">
      <SessionProvider session={session}>
        <body className={inter.className}>
          <ToasterProvider />
          {children}
        </body>
      </SessionProvider>
    </html>
  )
}

export default RootLayout