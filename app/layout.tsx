import type {Metadata} from 'next'
import {Poppins} from 'next/font/google'
import {ClerkProvider} from '@clerk/nextjs'

import '@/app/globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'HarmonyHive',
  description: 'HarmonyHive is a platform for institute event management.',
  icons: {
    icon: '/assets/images/logo.svg'
  }
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
      <body className={poppins.variable}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
