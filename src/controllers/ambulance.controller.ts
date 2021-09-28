import {
    Controller,
    Example,
    Get,
    Post,
    Query,
    Response,
    Route,
    Tags,
} from '@tsoa/runtime'
import { Ambulace_THIS_BASE } from '../constants/api.constants';
import { BasicNotFoundError } from '../interfaces/error.interface';
import { AmbulanceAnalyticsRepository } from '../repositories/ambulance.repository';
import { Iambulance } from '../types/responses/ambulance.responce';

@Route('v1/ambulance-data-submission')
@Tags('Ambulance Analytics')
export class AmbulanceController extends Controller {
    constructor() {
        super()
    }

    /**
     * @summary This API is used to fetch list of Govt. of UK Data sets
     * @returns 
     */
    @Example({
        "message": "string"
    })

    @Post('/process-message')
    // @Response<Iambulance>(
    //     '200',
    //     'Success'
    // )
    async PostAmbulanceData(): Promise<Iambulance>  {
        const response: Iambulance =
            (await new AmbulanceAnalyticsRepository().getPackageList()).data;
        return <Iambulance>(
            response
        )
    }
}