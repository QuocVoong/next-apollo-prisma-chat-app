import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export type Context = {
  prisma: PrismaClient
  user: any,
  req: any,
  res: any
}

export const context: Context = {
  prisma
}