import {
  Controller,
  Example,
  Get,
  Path,
  Post,
  Query,
  Response,
  Route,
  Tags,
} from '@tsoa/runtime'
import { threadId } from 'worker_threads'
import { Ambulace_THIS_BASE } from '../constants/api.constants'
import { BasicNotFoundError } from '../interfaces/error.interface'
import { CyberAlertsRepository } from '../repositories/cyber.repository'
import { Welcome } from '../types/responses/cyber.responce'
import { Welcome1 } from '../types/responses/cyber1.responce'

@Route('v1/CyberAlerts')
@Tags('Cyber Alerts')
export class CyberController extends Controller {
  constructor() {
    super()
    console.log('wahab')
  }

  /**
   * @summary This returns a list of cyber alerts
   * @returns
   */
  // @Example({
  //     "wahab" : "string"
  // })

  @Get('/')
  // @Response<Iambulance>(
  //     '200',
  //     'Success'
  // )
  async getCyberAlerts(): Promise<Welcome> {
    const response: Welcome = (await new CyberAlertsRepository().getCyberAlet())
      .data
    return <Welcome>response
  }

  /**
   * @summary This returns a list of cyber alerts
   * @param bool Adding the _limited=boolean parameter returns only a limited subset of the most important fields
   * @returns
   */

  @Get('/limited/{bool}')
  async getCyberAlerts1(@Path() bool: boolean): Promise<Welcome> {
    const response: Welcome = (
      await new CyberAlertsRepository().getCyberAlet1(bool)
    ).data
    return <Welcome>response
  }

  /**
   * @summary This returns a list of cyber alerts
   * @param pageNo When requesting a full return of cyber alerts, you can return any page of the alerts shown by adding the &page=x, where x is the number of the page to be returned
   * @returns 0
   */

  @Get('/page/{pageNo}')
  async getCyberAlerts2(@Path() pageNo: number): Promise<Welcome> {
    console.log('Wahab')

    const response: Welcome = (
      await new CyberAlertsRepository().getCyberAlet2(pageNo)
    ).data
    return <Welcome>response
  }

  /**
   * @summary This returns a list of cyber alerts
   * @param threadId To return a single cyber alert, you must specify a threat ID, normally formatted CC-3327
   * @returns 0
   */

  @Get('/thread/{threadId}')
  async getCyberAlerts3(@Path() threadId: string): Promise<Welcome1> {
    console.log('Wahab')

    const response: Welcome1 = (
      await new CyberAlertsRepository().getCyberAlet3(threadId)
    ).data
    return <Welcome1>response
  }
}
