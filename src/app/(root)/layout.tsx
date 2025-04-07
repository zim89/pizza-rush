import type { ReactNode } from 'react'
import { Header } from '@/widgets/header/header'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className='grid min-h-screen grid-rows-[auto_1fr]'>
      <Header />
      <main>{children}</main>
    </div>
  )
}
