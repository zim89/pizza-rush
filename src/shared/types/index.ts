export const ParamsEnum = {
  priceFrom: 'priceFrom',
  priceTo: 'priceTo',
  pizzaSizes: 'pizzaSizes',
  pizzaTypes: 'pizzaTypes',
  ingredients: 'ingredients',
  categories: 'categories',
  sort: 'sort',
} as const

export type QueryParams = {
  [K in keyof typeof ParamsEnum]?: string
}
