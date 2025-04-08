import type { Product } from '@prisma/client'
import { apiRoutes, axiosBase } from '@/shared/api'

export const productApi = {
  findMany: async (query: string): Promise<Product[]> => {
    const response = await axiosBase.get<Product[]>(apiRoutes.products, {
      params: { query },
    })
    return response.data
  },
} as const
