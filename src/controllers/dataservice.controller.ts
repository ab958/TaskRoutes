import {
    Controller,
    Example,
    Get,
    Post,
    Path,
    Query,
    Response,
    Route,
    Tags,
} from '@tsoa/runtime'
import { Ambulace_THIS_BASE } from '../constants/api.constants';
import { BasicNotFoundError } from '../interfaces/error.interface';
import { DataServiceRepository } from '../repositories/dataRegister.repositories';
import { Iambulance } from '../types/responses/ambulance.responce';
import { Welcome2, Welcome4 } from '../types/responses/dataservice.responce';


@Route('v1/dataRegister')
@Tags('Data Registers Service')
export class DataRegisterController extends Controller {
    constructor() {
        super()
    }

    /**
     * @summary This API is used to fetch list of Govt. of UK Data sets
     * @returns 
     */
    @Example(
        [
            "string"
            ]
    )

    @Get('/service')
    // @Response<Iambulance>(
    //     '200',
    //     'Success'
    // )
    async GetDataSerivce(): Promise<any>  {
        const response: any =
            (await new DataServiceRepository().getDataservice()).data;
        return <any>(
            response
        )
    }
    /**
     * @summary This API is used to fetch list of Govt. of UK Data sets
     * @returns 0
     */
     @Example(
        [
            "string"
            ]
    )
    
     @Get('/dbo/table/')
     // @Response<Iambulance>(
     //     '200',
     //     'Success'
     // )
     async GetallTable(): Promise<any>  {
         const response: any =
             (await new DataServiceRepository().getallTable()).data;
         return <any>(
             response
         )
     }

     /**
     * @summary This API is used to fetch list of Govt. of UK Data sets
     * @returns 0
     */
    //   @Example(
    //     [
    //         "string"
    //         ]
    // )
    
     @Get('/dbo/table/ONS_CHD_GEO_LISTINGS/column/')
     // @Response<Iambulance>(
     //     '200',
     //     'Success'
     // )
     async GetallCol_inTable(): Promise<Welcome2>  {
         const response: Welcome2 =
             (await new DataServiceRepository().getall_col_inTable()).data;
         return <Welcome2>(
             response
         )
     }

     /**
   * @summary This returns a list of cyber alerts
   * @param pageNo To return a single cyber alert, you must specify a threat ID, normally formatted XXXXX
   * @returns 0
   */

  @Get('/dbo/table/ONS_CHD_GEO_LISTINGS/query/{pageNo}')
  async queryPageNo(@Path() pageNo: number): Promise<Welcome4> {
    console.log('Wahab')

    const response: Welcome4 = (
      await new DataServiceRepository().queryPage(pageNo)
    ).data
    return <Welcome4>response
  }
     /**
   * @summary This returns a list of cyber alerts
   * @param bool To return a single cyber alert, you must specify a threat ID, normally formatted XXXXX
   * @returns 0
   */

  @Get('/dbo/table/ONS_CHD_GEO_LISTINGS/query/download/{bool}')
  async queryTableDownload(@Path() bool: boolean): Promise<Welcome4 | string> {
    console.log('Wahab')

    const response: Welcome4 | string = (
      await new DataServiceRepository().queryDownload(bool)
    ).data
    return <Welcome4 | string >response
  }
     /**
   * @summary This returns a list of cyber alerts
   * @param filter Filter argument must be <b>all</b>, <b>latest</b> or <b>archived</b>
   * @returns 0
   */

  @Get('/dbo/table/ONS_CHD_GEO_LISTINGS/query/filter/{filter}')
  async filterItems(@Path() filter: string): Promise<Welcome4> {
    console.log('Wahab')

    const response: Welcome4  = (
      await new DataServiceRepository().filteritem(filter)
    ).data
    return <Welcome4 >response
  }

}