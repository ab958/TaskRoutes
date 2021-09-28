import axios from 'axios'

export class CyberAlertsUkService {
  constructor() {}

  getCyberAlets(): Promise<any> {
    return axios.get(`https://digital.nhs.uk/restapi/CyberAlert/page`)
  }

  getCyberAlets1(bool: boolean): Promise<any> {
    return axios.get(
      `https://digital.nhs.uk/restapi/CyberAlert/page?_limited=${bool}`
    )
  }

  getCyberAlets2(pageNo: number): Promise<any> {
    return axios.get(
      `https://digital.nhs.uk/restapi/CyberAlert/page?page=${pageNo}`
    )
  }

  getCyberAlets3(threadID: string): Promise<any> {
    return axios.get(
      `https://digital.nhs.uk/restapi/CyberAlert/single?threatid=${threadID}`
    )
  }
}
