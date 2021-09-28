import { BankHolidaysService } from "../services/bankholidays/bankholidays.service";

export class BankHolidaysRepository {
    constructor() { }

    async getBankHolidays()
        : Promise<any> {
        return new BankHolidaysService().getBankHolidays()
    }
}
