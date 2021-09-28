import {
  Controller,
  Example,
  Get,
  Header,
  Post,
  Query,
  Response,
  Route,
  Security,
  Tags,
} from '@tsoa/runtime'
import { Ambulace_THIS_BASE } from '../constants/api.constants'
import { BasicNotFoundError } from '../interfaces/error.interface'
import { personalDemograhicsRepository } from '../repositories/personalDemo.repository'
import { personalDemo } from '../types/responses/personalDemograph.responce'

@Route('v1/personalDemoGraphics')
@Tags('Personal Demographics Service')
export class PersonalDemoController extends Controller {
  constructor() {
    super()
  }

  /**
   * @summary sdfafasdf
   * @param Authorization adsadasda
   * @returns personalDemo
   */
  @Get('/')
  async getPatientData(
    @Header() AuthToken: string, //($^Bearer\ [[:ascii:]]+$),
    @Header('NHSD-Session-URID') nhds: string,
    @Header('X-Request-ID') xReq: string,
    @Header('X-Correlation-ID') xcor: string
  ): Promise<personalDemo> {
    console.log(AuthToken, 'abc')
    const response: personalDemo =
      await new personalDemograhicsRepository().getPatient(
        AuthToken,
        nhds,
        xReq,
        xcor
      )
    return <personalDemo>response
  }
}
