import { Application } from 'express'
import homeRoutes from './home.routes'
import legoRoutes from './lego.routes'
import setRoutes from './set.routes'

export default class Routes {
  constructor(app: Application) {
    app.use('/home', homeRoutes)
    app.use('/lego', legoRoutes)
    app.use('/set', setRoutes)
  }
}
