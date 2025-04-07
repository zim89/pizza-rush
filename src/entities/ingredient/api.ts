import type { Ingredient } from '@prisma/client'
import { apiRoutes, axiosBase } from '@/shared/api'

export const ingredientApi = {
  findMany: async (): Promise<Ingredient[]> => {
    const response = await axiosBase.get<Ingredient[]>(apiRoutes.ingredients)
    return response.data
  },
} as const
