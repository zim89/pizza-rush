import type { Ingredient, Product, ProductVariation } from '@prisma/client'

export type ProductWithRelations = Product & {
  items: ProductVariation[]
  ingredients: Ingredient[]
}
