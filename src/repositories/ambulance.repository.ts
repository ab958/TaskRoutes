import { AmbulanceAnalyticsUkService } from "../services/AmbulanceAnalytics/ambulance.service";

export class AmbulanceAnalyticsRepository {
    constructor() { }

    getPackageList()
        : Promise<any> {
        return new AmbulanceAnalyticsUkService().PostAmbulanceData()
    }

  
}
