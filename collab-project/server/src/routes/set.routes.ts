import { Router } from 'express'
import { SetController } from '../controllers/sets.controller'

class LegoRoutes {
  router = Router()

  constructor() {
    this.intializeRoutes()
  }

  intializeRoutes() {
    this.router.get('/', async (req, res) => {
      await SetController.list(req, res)
      return
    })

    this.router.post('/', async (req, res) => {
      await SetController.create(req, res)
      return
    })
  }
}

export default new LegoRoutes().router
