import { NextResponse, type NextRequest } from 'next/server'
import { prisma } from '@/shared/lib/prisma'

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get('query') || ''

  const products = await prisma.product.findMany({
    where: {
      name: {
        contains: query,
        mode: 'insensitive',
      },
    },
    take: 5,
  })

  return NextResponse.json(products)
}
