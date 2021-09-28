import axios from 'axios'
import { TARGET_UK_Ambulance_Analytics } from '../../constants/api.constants';

export class AmbulanceAnalyticsUkService {
    constructor() { }

    PostAmbulanceData()
        : Promise<any> {
        return axios.post(`https://sandbox.api.service.nhs.uk/ambulance-data-submission/$process-message`);
    }

    
}