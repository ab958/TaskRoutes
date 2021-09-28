import {
    Controller,
    Example,
    Get,
    Query,
    Response,
    Route,
    Tags,
} from '@tsoa/runtime'
import { BasicNotFoundError } from '../interfaces/error.interface';
import { DataGovUkRepository } from '../repositories/datagovuk.repository';
import { IGetInformationOfSingleDataSet, IGetListDataSetsResponse } from '../types/responses/datagovuk.response';

@Route('v1/data.gov.uk')
@Tags('Data.gov.uk Dataset')
export class DataGovUkController extends Controller {
    constructor() {
        super()
    }

    /**
     * @summary This API is used to fetch list of Govt. of UK Data sets
     * @returns List of UK Govt List of datasets
     */
    @Example({
        help: "https://help.url.com",
        success: true,
        result: [
            'dataset 01',
            'dataset 02'
        ]
    })

    @Get('/package_list')
    @Response<IGetListDataSetsResponse>(
        '200',
        'Success'
    )
    async getPackageList(): Promise<IGetListDataSetsResponse | BasicNotFoundError> {
        const response: IGetListDataSetsResponse =
            (await new DataGovUkRepository().getPackageList()).data;
        return <IGetListDataSetsResponse | BasicNotFoundError>(
            response
        )
    }

    // /**
    //  * @summary This API is used to fetch Information about a single data set
    //  * @param id Non-empty accurate <b>id</b> to fetch info from data set
    //  * @returns Information about a single dataset
    //  */
    // @Example({
    //     "help": "https://help.url.com",
    //     "success": true,
    //     "result": {
    //         "owner_org": "string",
    //         "groups": [],
    //         "temporal_coverage-from": "",
    //         "relationships_as_object": [],
    //         "unpublished": false,
    //         "private": false,
    //         "num_tags": 0,
    //         "foi-email": "",
    //         "update_frequency": "string",
    //         "odi-certificate": {
    //             "status": "final",
    //             "jurisdiction": "GB",
    //             "title": "string title",
    //             "created_at": "2014-10-28T12:25:57Z",
    //             "level": "bronze",
    //             "certificate_url": "https://certificates.url.com",
    //             "source": "string",
    //             "certification_type": "string",
    //             "badge_url": "https://certificates.badge.png",
    //             "cert_title": "string"
    //         },
    //         "id": "string",
    //         "metadata_created": "2010-08-02T09:19:47.600853",
    //         "metadata_modified": "2016-02-02T10:39:11.839032",
    //         "geographic_granularity": "string",
    //         "state": "active",
    //         "version": null,
    //         "core-dataset": false,
    //         "temporal_coverage-to": "",
    //         "license_id": "uk-ogl",
    //         "foi-web": "",
    //         "resources": [
    //             {
    //                 "cache_last_updated": null,
    //                 "cache_url": null,
    //                 "mimetype_inner": null,
    //                 "hash": "",
    //                 "description": "string",
    //                 "format": "ZIP",
    //                 "url": "https://platform.com/?year=2010&id=1&subject=places",
    //                 "created": "2016-02-02T10:39:11.916391",
    //                 "state": "active",
    //                 "package_id": "string",
    //                 "last_modified": null,
    //                 "mimetype": null,
    //                 "url_type": null,
    //                 "date": "2010",
    //                 "position": 0,
    //                 "revision_id": "string",
    //                 "size": null,
    //                 "id": "string",
    //                 "resource_type": "string",
    //                 "name": null
    //             }

    //         ],
    //         "num_resources": 1,
    //         "contact-email": "",
    //         "tags": [],
    //         "title": "string title",
    //         "foi-name": "",
    //         "contact-phone": "",
    //         "creator_user_id": "string",
    //         "relationships_as_subject": [],
    //         "contact-name": "",
    //         "name": "string",
    //         "isopen": true,
    //         "url": "http://www.carbonculture.com",
    //         "type": "string",
    //         "notes": "string",
    //         "license_title": "string",
    //         "theme-secondary": [
    //             ""
    //         ],
    //         "extras": [
    //             {
    //                 "value": "",
    //                 "key": "string"
    //             }
    //         ],
    //         "license_url": "http://referencev.uk",
    //         "organization": {
    //             "description": "string",
    //             "title": "string",
    //             "created": "2012-06-27T14:48:40.244951",
    //             "approval_status": "pending",
    //             "is_organization": true,
    //             "state": "active",
    //             "image_url": "",
    //             "revision_id": "string",
    //             "type": "string",
    //             "id": "string",
    //             "name": "string"
    //         },
    //         "revision_id": "string",
    //         "date_released": "2010-07-30",
    //         "foi-phone": "",
    //         "theme-primary": "string"
    //     }
    // })

    // @Get('/package_show')
    // async getInfoSingleDataset(
    //     @Query() id: string
    // ): Promise<IGetInformationOfSingleDataSet> {
    //     const response: IGetInformationOfSingleDataSet =
    //         (await new DataGovUkRepository().getInfoSingleDataset(id)).data;
    //     return <IGetInformationOfSingleDataSet>(
    //         response
    //     )
    // }
}
