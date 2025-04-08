export const RoleEnum = {
  user: 'USER',
  admin: 'ADMIN',
} as const

export type RoleType = (typeof RoleEnum)[keyof typeof RoleEnum]

export const OrderStatusEnum = {
  pending: 'PENDING',
  succeeded: 'SUCCEEDED',
  cancelled: 'CANCELLED',
} as const

export type OrderStatusType =
  (typeof OrderStatusEnum)[keyof typeof OrderStatusEnum]

export const ParamsEnum = {
  query: 'query',
  sortBy: 'sortBy',
  sizes: 'sizes',
  pizzaTypes: 'pizzaTypes',
  ingredients: 'ingredients',
  priceFrom: 'priceFrom',
  priceTo: 'priceTo',
} as const

export type ParamsEnumType = {
  [K in keyof typeof ParamsEnum]?: string
}
