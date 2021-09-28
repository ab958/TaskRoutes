import { API_VERSION_1 } from './string.constants'

/***************************      Govt. Digital Services API   *****************************************/

/***************************      Target API Bank Holidays     *****************************************/
// Base URL
const BASE_URL_BANK_HOLIDAYS = 'https://www.gov.uk/'

// Bank Holidays URL Target End Point
export const TARGET_BANK_HOLIDAYS_END_POINT = BASE_URL_BANK_HOLIDAYS + 'bank-holidays.json';

//This Target Route
export const BANK_HOLIDAYS_THIS_URL = '/' + API_VERSION_1 + '/bank-holidays.json'


/***************************      UK Gov Data Target     *****************************************/

//Base URL
const BASE_URL_UK_GOV_DATA = 'https://data.gov.uk/api/action/';

//Package list target end point

export const END_POINT_PACKAGE_LIST = '/package_list'

//Package list target URL
export const TARGET_UK_GOV_DATA_PACKAGE_LIST = `${BASE_URL_UK_GOV_DATA}${END_POINT_PACKAGE_LIST}`

//Package show target end point
export const END_POINT_PACKAGE_SHOW = '/package_show'

//Package list target URL
export const TARGET_UK_GOV_DATA_PACKAGE_SHOW = `${BASE_URL_UK_GOV_DATA}${END_POINT_PACKAGE_SHOW}`

//Data gov This base route
export const UK_GOVT_DATA_THIS_BASE = `/${API_VERSION_1}/data.gov.uk`



/***************************      Ambulance Analytics     *****************************************/

export const BASE_URL_Ambulance_Analytics = "https://sandbox.api.service.nhs.uk"

export const END_POINT = '/ambulance-data-submission/$process-message'

export const TARGET_UK_Ambulance_Analytics = `${BASE_URL_Ambulance_Analytics}${END_POINT}`

export const Ambulace_THIS_BASE = `${API_VERSION_1}/ambulance-data-submission`


// /***************************      Our API Food Alert     *****************************************/
// export const BASE_URL_FOOD_ALERTS_THIS: string = `/${API_VERSION_1}/foodalerts`

// // List Alert Url
// export const LIST_ALERT_THIS_URL: string = '/id'

// /***************************      Our API Food Hygiene Rating     *****************************************/
// // Base Url
// export const BASE_URL_FOOD_HYGIENE_RATING_THIS = `/${API_VERSION_1}/regions`

// // Regions/{pageNumber}/{pageSize}
// export const REGION_DETAIL_WITH_PAGINATION_URL_THIS = '/:pageNumber/:pageSize'
