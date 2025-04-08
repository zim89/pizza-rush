import { useState, type ChangeEvent } from 'react'
import { Input, Skeleton } from '@/shared/components/ui'
import { FilterCheckbox, type FilterCheckboxProps } from './filter-checkbox'

type Item = FilterCheckboxProps

interface Props {
  title: string
  items: Item[]
  defaultItems?: Item[]
  limit?: number
  loading?: boolean
  searchInputPlaceholder?: string
  onClickCheckbox?: (id: string) => void
  defaultValue?: string[]
  selected?: Set<string>
  className?: string
  name?: string
}

export const CheckboxFiltersGroup = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = 'Search...',
  className,
  loading,
  onClickCheckbox,
  selected,
  name,
}: Props) => {
  const [showAll, setShowAll] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  const onChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  if (loading) {
    return (
      <div className={className}>
        <p className='mb-3 font-bold'>{title}</p>

        {...Array(limit)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} className='mb-4 h-6 rounded-[8px]' />
          ))}

        <Skeleton className='mb-4 h-6 w-28 rounded-[8px]' />
      </div>
    )
  }

  const list = showAll
    ? items.filter(item =>
        item.text.toLowerCase().includes(searchValue.toLocaleLowerCase()),
      )
    : (defaultItems || items).slice(0, limit)

  return (
    <div className={className}>
      <p className='mb-3 font-bold'>{title}</p>

      {showAll && (
        <div className='mb-5'>
          <Input
            onChange={onChangeSearchInput}
            placeholder={searchInputPlaceholder}
            className='border-none bg-gray-50'
          />
        </div>
      )}

      <div className='scrollbar flex max-h-96 flex-col gap-4 overflow-auto pr-2'>
        {list.map((item, index) => (
          <FilterCheckbox
            key={index}
            text={item.text}
            value={item.value}
            endAdornment={item.endAdornment}
            checked={selected?.has(item.value)}
            onCheckedChange={() => onClickCheckbox?.(item.value)}
            name={name}
          />
        ))}
      </div>

      {items.length > limit && (
        <div className={showAll ? 'mt-4 border-t border-t-neutral-100' : ''}>
          <button
            onClick={() => {
              setShowAll(!showAll)
              setSearchValue('')
            }}
            className='text-primary mt-3 cursor-pointer'
          >
            {showAll ? 'Hide' : '+ Show all'}
          </button>
        </div>
      )}
    </div>
  )
}
