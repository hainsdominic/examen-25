import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

export class LegoController {
  static async list(req: Request, res: Response): Promise<Response> {
    const prisma = new PrismaClient()
    const legos = await prisma.lego.findMany()
    prisma.$disconnect()
    return res.status(200).json(legos)
  }

  static async create(req: Request, res: Response): Promise<Response> {
    const prisma = new PrismaClient()
    const lego = await prisma.lego.create({
      data: {
        name: req.body.name,
        color: req.body.color,
        price: req.body.price,
        quantity: req.body.quantity,
        image: req.body.image,
        sets: req.body.sets,
      },
    })
    prisma.$disconnect()
    return res.status(201).json(lego)
  }
}
