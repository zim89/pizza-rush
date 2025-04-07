import type { Category } from '@prisma/client'
import { apiRoutes, axiosBase } from '@/shared/api'
import type { QueryParams } from '@/shared/types'

export const categoryApi = {
  findMany: async (params: QueryParams): Promise<Category[]> => {
    const response = await axiosBase.get<Category[]>(apiRoutes.categories, {
      params: { params },
    })
    return response.data
  },
} as const
