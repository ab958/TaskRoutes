import axios from 'axios'
import {
  TARGET_UK_GOV_DATA_PACKAGE_LIST,
  TARGET_UK_GOV_DATA_PACKAGE_SHOW,
} from '../../constants/api.constants'

export class DataGovUkService {
  constructor() {}

  getPackageList(): Promise<any> {
    return axios.get(TARGET_UK_GOV_DATA_PACKAGE_LIST)
  }

  getInfoSingleDataset(id: string): Promise<any> {
    return axios.get(TARGET_UK_GOV_DATA_PACKAGE_SHOW, { params: { id: id } })
  }
}
