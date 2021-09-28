import { CyberAlertsUkService } from '../services/CyberAlerts/cyber.service'

export class CyberAlertsRepository {
  constructor() {}

  getCyberAlet(): Promise<any> {
    return new CyberAlertsUkService().getCyberAlets()
  }

  getCyberAlet1(bool: boolean): Promise<any> {
    return new CyberAlertsUkService().getCyberAlets1(bool)
  }

  getCyberAlet2(pageNo: number): Promise<any> {
    return new CyberAlertsUkService().getCyberAlets2(pageNo)
  }

  getCyberAlet3(threadid: string): Promise<any> {
    return new CyberAlertsUkService().getCyberAlets3(threadid)
  }
}
