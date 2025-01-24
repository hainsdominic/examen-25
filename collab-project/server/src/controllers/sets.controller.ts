import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

export class SetController {
  static async list(req: Request, res: Response): Promise<Response> {
    const prisma = new PrismaClient()
    const sets = await prisma.set.findMany()
    prisma.$disconnect()
    return res.status(200).json(sets)
  }

  static async create(req: Request, res: Response): Promise<Response> {
    const prisma = new PrismaClient()
    const set = await prisma.set.create({
      data: {
        name: req.body.name,
        year: req.body.year,
        theme: req.body.theme,
      },
    })
    prisma.$disconnect()
    return res.status(201).json(set)
  }
}
