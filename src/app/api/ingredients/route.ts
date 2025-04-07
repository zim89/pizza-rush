import { NextResponse } from 'next/server'
import { prisma } from '@/shared/lib/prisma'

export async function GET() {
  console.log('DDDDDD')
  const ingredients = await prisma.ingredient.findMany({})

  return NextResponse.json(ingredients)
}
