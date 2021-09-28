import { Router } from 'express'
import { BankHolidaysController } from '../controllers/bankholidays.controller'
export class BankHolidaysRoutes {
    router: Router

    constructor() {
        this.router = Router()
        this.configureRoutes()
    }

    configureRoutes() {
        // List Bank Holidays
        this.router.get('/', async function (req, res, next) {
            try {
                const response = await new BankHolidaysController().getBankHolidays()
                res.status(200).send(response)
            } catch (e) {
                next(e)
            }
        })
    }
}

export const BankHolidaysRouter = new BankHolidaysRoutes().router
