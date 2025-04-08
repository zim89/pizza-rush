'use client'

import { useIngredients } from '@/features/ingredient'
import { Input, RangeSlider } from '@/shared/components/ui'
import { Title } from '@/shared/components'
import { useFilters } from '../hooks'
import { useQueryFilters } from '../hooks/use-query-filters'
import { CheckboxFiltersGroup } from './checkbox-filters-group'

interface Props {
  className?: string
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading } = useIngredients()
  const filters = useFilters()

  useQueryFilters(filters)

  const items = ingredients.map(item => ({
    value: String(item.id),
    text: item.name,
  }))

  const updatePrices = (prices: number[]) => {
    filters.setPrices('priceFrom', prices[0])
    filters.setPrices('priceTo', prices[1])
  }

  return (
    <div className={className}>
      <Title text='Filters' size='sm' className='mb-5 font-bold' />

      <CheckboxFiltersGroup
        title='Test type'
        name='pizzaTypes'
        className='mb-5'
        onClickCheckbox={filters.setPizzaTypes}
        selected={filters.pizzaTypes}
        items={[
          { text: 'Thin', value: '1' },
          { text: 'Traditional', value: '2' },
        ]}
      />

      <CheckboxFiltersGroup
        title='Sizes'
        name='sizes'
        className='mb-5'
        onClickCheckbox={filters.setSizes}
        selected={filters.sizes}
        items={[
          { text: '20 cm', value: '20' },
          { text: '30 cm', value: '30' },
          { text: '40 cm', value: '40' },
        ]}
      />

      <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
        <p className='mb-3 font-bold'>Price:</p>
        <div className='mb-5 flex gap-3'>
          <Input
            type='number'
            placeholder='0'
            min={0}
            max={1000}
            value={String(filters.prices.priceFrom)}
            onChange={e =>
              filters.setPrices('priceFrom', Number(e.target.value))
            }
          />
          <Input
            type='number'
            min={100}
            max={1000}
            placeholder='500'
            value={String(filters.prices.priceTo)}
            onChange={e => filters.setPrices('priceTo', Number(e.target.value))}
          />
        </div>

        <RangeSlider
          min={0}
          max={500}
          step={1}
          value={[filters.prices.priceFrom || 0, filters.prices.priceTo || 500]}
          onValueChange={updatePrices}
        />
      </div>

      <CheckboxFiltersGroup
        title='Ingredients'
        name='ingredients'
        className='mt-5'
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
        onClickCheckbox={filters.setSelectedIngredients}
        selected={filters.selectedIngredients}
      />
    </div>
  )
}
