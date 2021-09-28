import { Router } from 'express'
import {
  BANK_HOLIDAYS_THIS_URL,
  UK_GOVT_DATA_THIS_BASE,
  Ambulace_THIS_BASE,
} from '../constants/api.constants'
import { AmbulanceAnalytics } from './ambulanceAnalytics.routes'
import { BankHolidaysRouter } from './bankholidays.routes'
import { Cyber_ALerts_routes } from './cyber.routes'
import { DataGovUkRouter } from './datagovuk.routes'
import { DataRegisterService } from './dataService.routes'
import { personalDemo } from './personalDemo.routes'

export class IndexRoute {
  router: Router

  constructor() {
    this.router = Router()
    this.setRoutes()
  }

  setRoutes() {
    // Default Route
    this.router.get('/', function (req, res, next) {
      res.redirect('/api-docs')
    })

    // Bank Holidays Route
    this.router.use(BANK_HOLIDAYS_THIS_URL, BankHolidaysRouter)

    console.log('route running')
    // Data Gov Uk Route
    this.router.use(UK_GOVT_DATA_THIS_BASE, DataGovUkRouter)

    // Data Ambulance Route
    this.router.use('/v1/ambulance-data-submission', AmbulanceAnalytics)

    this.router.use('/v1/CyberAlerts', Cyber_ALerts_routes)
    this.router.use('/v1/dataRegister', DataRegisterService)
    this.router.use('/v1/personalDemoGraphics', personalDemo)
  }
}

export const MainRouter = new IndexRoute().router
