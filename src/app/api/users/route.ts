import { NextResponse, type NextRequest } from 'next/server'
import { prisma } from '@/shared/lib/prisma'

export async function GET() {
  const users = await prisma.user.findMany()

  return NextResponse.json(users)
}

export async function POST(req: NextRequest) {
  const data = await req.json()

  const user = await prisma.user.create({
    data,
  })

  return NextResponse.json(user)
}
