import type { ParamsEnumType } from '@/shared/constants'
import { prisma } from '@/shared/lib/prisma'

const DEFAULT_MIN_PRICE = 0
const DEFAULT_MAX_PRICE = 500

export const categoryApi = {
  findMany: async (params: ParamsEnumType) => {
    const sizes = params.sizes?.split(',').map(Number)
    const pizzaTypes = params.pizzaTypes?.split(',').map(Number)
    const ingredientsIdArr = params.ingredients?.split(',').map(Number)

    const minPrice = Number(params.priceFrom) || DEFAULT_MIN_PRICE
    const maxPrice = Number(params.priceTo) || DEFAULT_MAX_PRICE

    const categories = await prisma.category.findMany({
      include: {
        products: {
          orderBy: {
            id: 'desc',
          },
          where: {
            ingredients: ingredientsIdArr
              ? {
                  some: {
                    id: {
                      in: ingredientsIdArr,
                    },
                  },
                }
              : undefined,
            items: {
              some: {
                size: {
                  in: sizes,
                },
                pizzaType: {
                  in: pizzaTypes,
                },
                price: {
                  gte: minPrice, // >=
                  lte: maxPrice, // <=
                },
              },
            },
          },
          include: {
            ingredients: true,
            items: {
              where: {
                price: {
                  gte: minPrice,
                  lte: maxPrice,
                },
              },
              orderBy: {
                price: 'asc',
              },
            },
          },
        },
      },
    })

    return categories
  },
} as const
