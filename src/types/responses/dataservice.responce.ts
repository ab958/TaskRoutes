export interface Welcome2 {
    column_type:         ColumnType2;
    max_length:          number | null;
    is_nullable:         IsNullable2;
    primary_key:         IsNullable2;
    extended_properties: string;
}

export enum ColumnType2 {
    Date = "date",
    Int = "int",
    Varchar = "varchar",
}

export enum IsNullable2 {
    No = "No",
    Yes = "Yes",
}

export interface Welcome4 {
    ONS_CHD_GEO_LISTINGS_KEY: number;
    GEOGRAPHY_CODE:           string;
    GEOGRAPHY_NAME:           string;
    WELSH_GEOGRAPHY_NAME:     null;
    SI_NUMBER:                string;
    SI_TITLE:                 string;
    DATE_OF_OPERATION:        Date;
    DATE_OF_TERMINATION:      Date;
    PARENT_GEOGRAPHY_CODE:    string;
    ENTITY_CODE:              string;
    ENTITY_OWNER:             string;
    IS_CURRENT:               number;
    SYSTEM_CREATED_DATE:      Date;
}