export const RoleEnum = {
  User: 'USER',
  Admin: 'ADMIN',
} as const

export type RoleType = (typeof RoleEnum)[keyof typeof RoleEnum]

export const OrderStatusEnum = {
  Pending: 'PENDING',
  Succeeded: 'SUCCEEDED',
  Cancelled: 'CANCELLED',
} as const

export type OrderStatusType =
  (typeof OrderStatusEnum)[keyof typeof OrderStatusEnum]
