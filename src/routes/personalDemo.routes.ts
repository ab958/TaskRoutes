import { Express, Router } from 'express'
import { PersonalDemoController } from '../controllers/perosonalDemo.controller'

class Personal_Demographics {
  router: Router
  constructor() {
    this.router = Router()
    this.routes()
  }
  routes() {
    console.log('ambu route running')

    // Authorization: "Bearer g1112R_ccQ1Ebbb4gtHBP1aaaNM",
    // "NHSD-Session-URID": "555254240100",
    // "X-Request-ID": "60E0B220-8136-4CA5-AE46-1D97EF59D068",
    // "X-Correlation-ID": "11C46F5F-CDEF-4865-94B2-0EE0EDCC26DA",
    this.router.get(`/`, async (req, res, next) => {
      // console.log('wahab')
      try {
        console.log(req.header('AuthToken'))
        const wahab = <any>req.header('AuthToken')
        const nhds = <any>req.header('NHSD-Session-URID')
        const xReq = <any>req.header('X-Request-ID')
        const xcor = <any>req.header('X-Correlation-ID')
        const responce = await new PersonalDemoController().getPatientData(
          wahab,
          nhds,
          xReq,
          xcor
        )
        res.send(responce).status(200)
      } catch (e) {
        next(e)
      }
    })
  }
}

export const personalDemo = new Personal_Demographics().router
