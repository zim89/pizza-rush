'use client'

import type { Category } from '@prisma/client'
import { useCategoryStore } from '@/entities/category'
import { cn } from '@/shared/utils'

interface Props {
  items: Category[]
  className?: string
}

export const Categories = ({ items, className }: Props) => {
  const categoryActiveId = useCategoryStore(state => state.activeId)

  return (
    <div
      className={cn('inline-flex gap-1 rounded-2xl bg-gray-50 p-1', className)}
    >
      {items.map(({ name, id }, index) => (
        <a
          className={cn(
            'flex h-11 items-center rounded-2xl px-5 font-bold',
            categoryActiveId === id &&
              'text-primary bg-white shadow-md shadow-gray-200',
          )}
          href={`/#${name}`}
          key={index}
        >
          <button>{name}</button>
        </a>
      ))}
    </div>
  )
}
