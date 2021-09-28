import axios from 'axios'

export class PersonalDemographicUkService {
  constructor() {}

  async getPatientData(
    abc: string,
    nhds: string,
    xReq: string,
    xcor: string
  ): Promise<any> {
    const options = {
      headers: {
        Authorization: abc,
        'NHSD-Session-URID': nhds,
        'X-Request-ID': xReq,
        'X-Correlation-ID': xcor,
      },
    }
    const data = await axios.get(
      `https://sandbox.api.service.nhs.uk/personal-demographics/FHIR/R4/Patient?_fuzzy-match=false&_exact-match=false&_history=true&_max-results=1&family=Smith&given=Jane&gender=female&birthdate=eq2010-10-22&death-date=eq2010-10-22&address-postcode=LS1%206AE&general-practitioner=Y12345`,
      options
    )
    return data.data
  }
}
