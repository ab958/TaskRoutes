import {
  Controller,
  Example,
  Get,
  Response,
  Route,
  Tags,
} from '@tsoa/runtime'
import { BasicNotFoundError } from '../interfaces/error.interface';
import { BankHolidaysRepository } from '../repositories/bankholidays.repository'
import { IGetBankHolidaysResponse } from '../types/responses/bankholidays.response'

@Route('v1/bank-holidays.json')
@Tags('UK Bank Holidays')
export class BankHolidaysController extends Controller {
  constructor() {
    super()
  }
  /**
   * @summary This API return UK bank holidays
   * @returns List of UK Govt Bank Holidays
   */
  @Example(
    {
      "england-and-wales": {
        "division": "england-and-wales",
        "events": [
          {
            "title": "Title String",
            "date": "yyyy-mm-dd",
            "notes": "",
            "bunting": true
          },
          {
            "title": "Title String",
            "date": "yyyy-mm-dd",
            "notes": "Notes String",
            "bunting": true
          }
        ]
      },
      "scotland": {
        "division": "scotland",
        "events": [
          {
            "title": "Title String",
            "date": "yyyy-mm-dd",
            "notes": "Notes String",
            "bunting": true
          },
          {
            "title": "Title String",
            "date": "yyyy-mm-dd",
            "notes": "",
            "bunting": true
          }
        ]
      },
      "northern-ireland": {
        "division": "scotland",
        "events": [
          {
            "title": "Title String",
            "date": "yyyy-mm-dd",
            "notes": "Notes String",
            "bunting": true
          },
          {
            "title": "Title String",
            "date": "yyyy-mm-dd",
            "notes": "",
            "bunting": true
          }
        ]
      },
      "united-kingdom": {
        "division": "scotland",
        "events": [
          {
            "title": "Title String",
            "date": "yyyy-mm-dd",
            "notes": "Notes String",
            "bunting": true
          },
          {
            "title": "Title String",
            "date": "yyyy-mm-dd",
            "notes": "",
            "bunting": true
          }
        ]
      }
    }
  )

  @Get('/')
  @Response<IGetBankHolidaysResponse>(
    '200',
    'Success'
  )
  async getBankHolidays(): Promise<IGetBankHolidaysResponse | BasicNotFoundError> {
    const response: IGetBankHolidaysResponse =
      await new BankHolidaysRepository().getBankHolidays();
    return <IGetBankHolidaysResponse | BasicNotFoundError>(
      response
    )
  }
}
