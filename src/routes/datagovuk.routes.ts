import { Router } from 'express'
import { END_POINT_PACKAGE_LIST, END_POINT_PACKAGE_SHOW } from '../constants/api.constants'
import { DataGovUkController } from '../controllers/datagovuk.controller'
export class DataGovUkRoutes {
    router: Router

    constructor() {
        this.router = Router()
        this.configureRoutes()
    }

    configureRoutes() {
        // List Package data list
        this.router.get(END_POINT_PACKAGE_LIST, async function (req, res, next) {
            try {
                const response = await new DataGovUkController().getPackageList()
                res.status(200).send(response)
            } catch (e) {
                next(e)
            }
        })

        // Info single package dataset
        // this.router.get(END_POINT_PACKAGE_SHOW, async function (req, res, next) {
        //     try {
        //         const id: any = req.query.id ? req.query.id : '';
        //         if (!id)
        //             next(new Error('id param is required to process request'))
        //         const response = await new DataGovUkController().getInfoSingleDataset(id)
        //         res.status(200).send(response)
        //     } catch (e) {
        //         res.status(400).send(e)
        //     }
        // })
    }
}

export const DataGovUkRouter = new DataGovUkRoutes().router
