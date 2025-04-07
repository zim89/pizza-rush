import Image from 'next/image'
import Link from 'next/link'

export const Logo = () => {
  return (
    <Link href='/'>
      <div className='flex items-center gap-4'>
        <Image src='/logo.png' alt='Logo' width={35} height={35} />
        <div>
          <p className='text-2xl font-black uppercase'>Pizza Rush</p>
          <p className='text-sm leading-3 text-gray-400'>
            Couldn&apos;t be tastier!
          </p>
        </div>
      </div>
    </Link>
  )
}
