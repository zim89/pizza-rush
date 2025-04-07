'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@prisma/client'
import { Search } from 'lucide-react'
import { useClickAway, useDebounce } from 'react-use'
import { productApi } from '@/entities/product'
import { appRoutes } from '@/shared/constants'
import { cn } from '@/shared/utils'

interface Props {
  className?: string
}

export const SearchInput: React.FC<Props> = ({ className }) => {
  const [searchQuery, setSearchQuery] = React.useState('')
  const [focused, setFocused] = React.useState(false)
  const [products, setProducts] = React.useState<Product[]>([])
  const ref = React.useRef(null)

  useClickAway(ref, () => {
    setFocused(false)
  })

  useDebounce(
    async () => {
      if (searchQuery.trim() !== '') {
        try {
          const response = await productApi.findMany(searchQuery)
          setProducts(response)
        } catch (error) {
          console.log(error)
        }
      } else {
        setProducts([])
      }
    },
    500,
    [searchQuery],
  )

  const onClickItem = () => {
    setFocused(false)
    setSearchQuery('')
    setProducts([])
  }

  return (
    <>
      {focused && (
        <div className='fixed top-0 right-0 bottom-0 left-0 z-30 bg-black/50' />
      )}

      <div
        ref={ref}
        className={cn(
          'relative z-30 flex h-11 flex-1 justify-between rounded-2xl',
          className,
        )}
      >
        <Search className='absolute top-1/2 left-3 h-5 translate-y-[-50%] text-gray-400' />
        <input
          className='w-full rounded-2xl bg-gray-100 pl-11 outline-none'
          type='text'
          placeholder='Search...'
          onFocus={() => setFocused(true)}
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />

        {products.length > 0 && (
          <div
            className={cn(
              'invisible absolute top-14 z-30 w-full rounded-xl bg-white py-2 opacity-0 shadow-md transition-all duration-200',
              focused && 'visible top-12 opacity-100',
            )}
          >
            {products.map(product => (
              <Link
                onClick={onClickItem}
                key={product.id}
                className='hover:bg-primary/10 flex w-full items-center gap-3 px-3 py-2'
                href={`${appRoutes.products}/${product.id}`}
              >
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={32}
                  height={32}
                  className='rounded-sm'
                />
                <span>{product.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
