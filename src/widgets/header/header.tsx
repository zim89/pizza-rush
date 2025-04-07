'use client'

import { UserIcon } from 'lucide-react'
import { SearchInput } from '@/features/search-input'
import { Button } from '@/shared/components/ui'
import { Container, Logo } from '@/shared/components'
import { cn } from '@/shared/utils'

interface Props {
  hasSearch?: boolean
  hasCart?: boolean
  className?: string
}

export const Header = ({
  hasSearch = true,
  hasCart = true,
  className,
}: Props) => {
  return (
    <header className={cn('border-b', className)}>
      <Container className='flex items-center justify-between py-8'>
        <Logo />

        {hasSearch && (
          <div className='mx-10 flex-1'>
            <SearchInput />
          </div>
        )}

        <div className='flex items-center gap-3'>
          <Button variant='outline' className='flex items-center gap-1'>
            <UserIcon className='size-4' /> Login
          </Button>
        </div>
      </Container>
    </header>
  )
}
