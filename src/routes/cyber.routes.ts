import { Express, Router } from 'express'
import {} from '../constants/api.constants'
import { CyberController } from '../controllers/cyber.controller'

class Cyber_routes {
  router: Router
  constructor() {
    this.router = Router()
    this.routes()
  }
  routes() {
    console.log('ambu route running')
    this.router.get('/', async (req, res, next) => {
      console.log('wahab')
      try {
        const responce = await new CyberController().getCyberAlerts()
        res.send(responce).status(200)
      } catch (e) {
        next(e)
      }
    })
    this.router.get('/limited/:bool', async (req, res, next) => {
      try {
        const bool1 = <any>req.params.bool
        const responce = await new CyberController().getCyberAlerts1(bool1)
        res.send(responce).status(200)
      } catch (e) {
        next(e)
      }
    })
    this.router.get('/page/:pageNo', async (req, res, next) => {
      try {
        console.log('wahababababaabababbaba')
        const bool1: any = req.params.pageNo
        const responce = await new CyberController().getCyberAlerts2(bool1)
        res.send(responce).status(200)
      } catch (e) {
        next(e)
      }
    })
    this.router.get('/thread/:threadID', async (req, res, next) => {
      try {
        console.log('wahababababaabababbaba')
        const bool1: any = req.params.threadID
        const responce = await new CyberController().getCyberAlerts3(bool1)
        res.send(responce).status(200)
      } catch (e) {
        next(e)
      }
    })
  }
}

export const Cyber_ALerts_routes = new Cyber_routes().router
