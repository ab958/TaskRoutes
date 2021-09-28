import { DataRegisterUkService } from "../services/DataRegisterPoint/dataRegister.service";

export class DataServiceRepository {
    constructor() { }

    getDataservice()
        : Promise<any> {
        return new DataRegisterUkService().getDataregister()
    }

    getallTable()
        : Promise<any> {
        return new DataRegisterUkService().querytable()
    }
    getall_col_inTable()
        : Promise<any> {
        return new DataRegisterUkService().queryColumn_inTable()
    }
    queryPage(pageNo : number)
        : Promise<any> {
        return new DataRegisterUkService().queryPageNO(pageNo)
    }
    queryDownload(bool : boolean)
        : Promise<any> {
        return new DataRegisterUkService().queryDownloadedTable(bool)
    }
    filteritem(bool : string)
        : Promise<any> {
        return new DataRegisterUkService().filterItems(bool)
    }

  
}