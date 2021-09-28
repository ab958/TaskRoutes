import axios from 'axios'
import { TARGET_BANK_HOLIDAYS_END_POINT } from '../../constants/api.constants'

export class BankHolidaysService {
    constructor() { }

    getBankHolidays() {
        return axios.get(TARGET_BANK_HOLIDAYS_END_POINT);
    }
}
