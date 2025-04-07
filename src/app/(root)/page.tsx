import { Suspense } from 'react'
import { Filters } from '@/features/filters'
import { Container, Title } from '@/shared/components'

export default function Home() {
  return (
    <>
      <Container className='mt-10'>
        <Title text='All products' size='lg' className='font-extrabold' />

        <div className='mt-10 flex gap-[80px] pb-14'>
          <div className='w-[250px]'>
            <Suspense>
              <Filters />
            </Suspense>
          </div>

          <div className='flex-1'>
            <div className='flex flex-col gap-16'>Products block</div>
          </div>
        </div>
      </Container>
    </>
  )
}
