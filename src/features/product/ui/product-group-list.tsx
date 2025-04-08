'use client'

import { useEffect, useRef, type RefObject } from 'react'
import { useIntersection } from 'react-use'
import { useCategoryStore } from '@/entities/category'
import type { ProductWithRelations } from '@/entities/product'
import { Title } from '@/shared/components'
import { cn } from '@/shared/utils'
import { ProductCard } from './product-card'

interface Props {
  title: string
  items: ProductWithRelations[]
  categoryId: number
  className?: string
  listClassName?: string
}

export const ProductsGroupList = ({
  title,
  items,
  listClassName,
  categoryId,
  className,
}: Props) => {
  const setActiveCategoryId = useCategoryStore(state => state.setActiveId)

  const intersectionRef = useRef<HTMLDivElement>(null)
  const intersection = useIntersection(
    intersectionRef as RefObject<HTMLElement>,
    {
      threshold: 0.4,
    },
  )

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId)
    }
  }, [categoryId, intersection?.isIntersecting, title])

  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size='lg' className='mb-5 font-extrabold' />

      <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
        {items.map(product => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.items[0].price}
            ingredients={product.ingredients}
          />
        ))}
      </div>
    </div>
  )
}
