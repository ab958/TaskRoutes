//Get Data set list Response
export interface IGetListDataSetsResponse {
    help: string;
    success: boolean;
    result: string[];
}

//Get Information single data set
export interface IGetInformationOfSingleDataSet {
    help: string;
    success: boolean;
    result: Result;
}

export interface Result {
    owner_org: string;
    groups: any[];
    "temporal_coverage-from": string;
    relationships_as_object: any[];
    unpublished: boolean;
    private: boolean;
    num_tags: number;
    "foi-email": string;
    update_frequency: string;
    "odi-certificate": OdiCertificate;
    id: string;
    metadata_created: Date;
    metadata_modified: Date;
    geographic_granularity: string;
    state: string;
    version: null;
    "core-dataset": boolean;
    "temporal_coverage-to": string;
    license_id: string;
    "foi-web": string;
    resources: Resource[];
    num_resources: number;
    "contact-email": string;
    tags: any[];
    title: string;
    "foi-name": string;
    "contact-phone": string;
    creator_user_id: string;
    relationships_as_subject: any[];
    "contact-name": string;
    name: string;
    isopen: boolean;
    url: string;
    type: string;
    notes: string;
    license_title: string;
    "theme-secondary": string[];
    extras: Extra[];
    license_url: string;
    organization: Organization;
    revision_id: string;
    date_released: Date;
    "foi-phone": string;
    "theme-primary": string;
}

export interface Extra {
    value: string;
    key: string;
}

export interface OdiCertificate {
    status: string;
    jurisdiction: string;
    title: string;
    created_at: Date;
    level: string;
    certificate_url: string;
    source: string;
    certification_type: string;
    badge_url: string;
    cert_title: string;
}

export interface Organization {
    description: string;
    title: string;
    created: Date;
    approval_status: string;
    is_organization: boolean;
    state: string;
    image_url: string;
    revision_id: string;
    type: string;
    id: string;
    name: string;
}

export interface Resource {
    cache_last_updated: null;
    cache_url: null;
    mimetype_inner: null;
    hash: string;
    description: string;
    format: string;
    url: string;
    created: Date;
    state: string;
    package_id: string;
    last_modified: null;
    mimetype: null;
    url_type: null;
    date: string;
    position: number;
    revision_id: string;
    size: null;
    id: string;
    resource_type: string;
    name: null;
}
