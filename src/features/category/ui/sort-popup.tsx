import { ArrowUpDownIcon } from 'lucide-react'
import { cn } from '@/shared/utils'

interface Props {
  className?: string
}

export const SortPopup = ({ className }: Props) => {
  return (
    <div
      className={cn(
        'inline-flex h-[52px] cursor-pointer items-center gap-1 rounded-2xl bg-gray-50 px-5',
        className,
      )}
    >
      <ArrowUpDownIcon size={16} />
      <b>Sorting:</b>
      <b className='text-primary'>popular</b>
    </div>
  )
}
