import type { Category } from '@prisma/client'
import { Container } from '@/shared/components'
import { cn } from '@/shared/utils'
import { Categories } from './categories'
import { SortPopup } from './sort-popup'

interface Props {
  categories: Category[]
  className?: string
}

export const CategoryBar = ({ categories, className }: Props) => {
  return (
    <div
      className={cn(
        'sticky top-0 z-10 bg-white py-5 shadow-lg shadow-black/5',
        className,
      )}
    >
      <Container className='flex items-center justify-between'>
        <Categories items={categories} />
        <SortPopup />
      </Container>
    </div>
  )
}
