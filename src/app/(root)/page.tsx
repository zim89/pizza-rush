import { Suspense } from 'react'
import { CategoryBar } from '@/features/category'
import { Filters } from '@/features/filters'
import { ProductsGroupList } from '@/features/product'
import { categoryApi } from '@/entities/category/category.api'
import { Container, Title } from '@/shared/components'
import type { ParamsEnumType } from '@/shared/constants'

interface Props {
  searchParams: Promise<ParamsEnumType>
}

export default async function Home({ searchParams }: Props) {
  const params = await searchParams
  const categories = await categoryApi.findMany(params)

  return (
    <>
      <Container className='mt-10'>
        <Title text='All products' size='lg' className='font-extrabold' />
      </Container>

      <CategoryBar
        categories={categories.filter(category => category.products.length > 0)}
      />

      <Container className='mt-10 pb-14'>
        <div className='flex gap-[80px]'>
          <div className='w-[250px]'>
            <Suspense>
              <Filters />
            </Suspense>
          </div>

          <div className='flex-1'>
            <div className='flex flex-col gap-16'>
              {categories.map(
                category =>
                  category.products.length > 0 && (
                    <ProductsGroupList
                      key={category.id}
                      title={category.name}
                      categoryId={category.id}
                      items={category.products}
                    />
                  ),
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
