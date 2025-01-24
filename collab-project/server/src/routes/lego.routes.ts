import { Router } from 'express'
import { LegoController } from '../controllers/lego.controller'

class LegoRoutes {
  router = Router()

  constructor() {
    this.intializeRoutes()
  }

  intializeRoutes() {
    this.router.get('/', async (req, res) => {
      await LegoController.list(req, res)
      return
    })

    this.router.post('/', async (req, res) => {
      await LegoController.create(req, res)
      return
    })
  }
}

export default new LegoRoutes().router
