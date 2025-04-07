import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import { Header } from '@/widgets/header/header'

const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'PizzaRush',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${nunito.variable} antialiased`}
        suppressHydrationWarning
      >
        <div className='grid min-h-screen grid-rows-[auto_1fr]'>
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
