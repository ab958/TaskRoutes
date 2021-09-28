import { PersonalDemographicUkService } from '../services/PersonalDemographics/personalDemograhics.service'

export class personalDemograhicsRepository {
  constructor() {}

  async getPatient(
    abc: string,
    nhds: string,
    xReq: string,
    xcor: string
  ): Promise<any> {
    const data = await new PersonalDemographicUkService().getPatientData(
      abc,
      nhds,
      xReq,
      xcor
    )
    return data
  }
}
