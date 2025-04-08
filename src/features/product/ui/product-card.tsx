import Image from 'next/image'
import Link from 'next/link'
import type { Ingredient } from '@prisma/client'
import { PlusIcon } from 'lucide-react'
import { Button } from '@/shared/components/ui'
import { Title } from '@/shared/components'

interface Props {
  id: number
  name: string
  price: number
  imageUrl: string
  ingredients: Ingredient[]
  className?: string
}

export const ProductCard = ({
  id,
  name,
  price,
  imageUrl,
  ingredients,
  className,
}: Props) => {
  return (
    <div className={className}>
      <Link href={`/products/${id}`}>
        <div className='bg-secondary flex h-[260px] justify-center rounded-lg p-6'>
          <Image
            src={imageUrl}
            alt={name}
            width={215}
            height={215}
            className='h-auto w-full'
          />
        </div>

        <Title
          text={name}
          size='sm'
          className='mt-3 mb-1 line-clamp-2 h-11 text-base/none font-bold'
        />

        {ingredients.length > 0 && (
          <p className='line-clamp-2 h-10 text-sm text-gray-400'>
            {ingredients.map(ingredient => ingredient.name).join(', ')}
          </p>
        )}

        <div className='mt-4 flex items-center justify-between'>
          <span className='text-[20px]'>
            from <b>{price} $</b>
          </span>

          <Button variant='secondary' className='text-base font-bold'>
            <PlusIcon size={20} className='mr-1' />
            Add to cart
          </Button>
        </div>
      </Link>
    </div>
  )
}
