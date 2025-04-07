'use client'

import { UserIcon } from 'lucide-react'
import { Button } from '@/shared/components/ui'
import { Container, Logo } from '@/shared/components'
import { cn } from '@/shared/utils'

interface Props {
  hasSearch?: boolean
  hasCart?: boolean
  className?: string
}

export const Header = ({ className }: Props) => {
  return (
    <header className={cn('border-b', className)}>
      <Container className='flex items-center justify-between py-8'>
        <Logo />

        <div className='flex items-center gap-3'>
          <Button variant='outline' className='flex items-center gap-1'>
            <UserIcon className='size-4' /> Login
          </Button>
        </div>
      </Container>
    </header>
  )
}
