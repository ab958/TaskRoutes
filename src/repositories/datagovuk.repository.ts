import { DataGovUkService } from "../services/datagovuk/datagovuk.service";

export class DataGovUkRepository {
    constructor() { }

    getPackageList()
        : Promise<any> {
        return new DataGovUkService().getPackageList()
    }

    getInfoSingleDataset(
        id: string
    )
        : Promise<any> {
        return new DataGovUkService().getInfoSingleDataset(id);
    }
}
