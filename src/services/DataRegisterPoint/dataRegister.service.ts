import axios from 'axios'

export class DataRegisterUkService {
    constructor() { }

    getDataregister()
        : Promise<any> {
        return axios.get(`https://registers.digital.nhs.uk/schema/`);
    }

    querytable()
        : Promise<any> {
        return axios.get(`https://registers.digital.nhs.uk/schema/dbo/table/`);
    }

    queryColumn_inTable()
        : Promise<any> {
        return axios.get(`https://registers.digital.nhs.uk/schema/dbo/table/ONS_CHD_GEO_LISTINGS/column/`);
    }
    queryPageNO(pageNo : number)
        : Promise<any> {
        return axios.get(`https://registers.digital.nhs.uk/schema/dbo/table/ONS_CHD_GEO_LISTINGS/query?page=${pageNo}`);
    }

    queryDownloadedTable(bool : boolean)
        : Promise<any> {
        return axios.get(`https://registers.digital.nhs.uk/schema/dbo/table/ONS_CHD_GEO_LISTINGS/query?download=${bool}`);
    }
    filterItems(bool : string)
        : Promise<any> {
        return axios.get(`https://registers.digital.nhs.uk/schema/dbo/table/ONS_CHD_GEO_LISTINGS/query?filter=${bool}`);
    }

    
}