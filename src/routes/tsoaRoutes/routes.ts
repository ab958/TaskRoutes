/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { Controller, ValidationService, FieldErrors, ValidateError, TsoaRoute, HttpStatusCodeLiteral, TsoaResponse } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { AmbulanceController } from './../../controllers/ambulance.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { BankHolidaysController } from './../../controllers/bankholidays.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { CyberController } from './../../controllers/cyber.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { DataGovUkController } from './../../controllers/datagovuk.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { DataRegisterController } from './../../controllers/dataservice.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { PersonalDemoController } from './../../controllers/perosonalDemo.controller';
import * as express from 'express';

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
    "Iambulance": {
        "dataType": "refObject",
        "properties": {
            "massage": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Notes": {
        "dataType": "refEnum",
        "enums": ["","Substitute day"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Event": {
        "dataType": "refObject",
        "properties": {
            "title": {"dataType":"string","required":true},
            "date": {"dataType":"datetime","required":true},
            "notes": {"ref":"Notes","required":true},
            "bunting": {"dataType":"boolean","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "DivisionEvents": {
        "dataType": "refObject",
        "properties": {
            "division": {"dataType":"string","required":true},
            "events": {"dataType":"array","array":{"dataType":"refObject","ref":"Event"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IGetBankHolidaysResponse": {
        "dataType": "refObject",
        "properties": {
            "england-and-wales": {"ref":"DivisionEvents","required":true},
            "scotland": {"ref":"DivisionEvents","required":true},
            "northern-ireland": {"ref":"DivisionEvents","required":true},
            "united-kingdom": {"ref":"DivisionEvents","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BasicNotFoundError": {
        "dataType": "refObject",
        "properties": {
            "statusCode": {"dataType":"double","required":true},
            "message": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Severity": {
        "dataType": "refEnum",
        "enums": ["Low","Medium"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SeverityStatusHistory1": {
        "dataType": "refObject",
        "properties": {
            "severity": {"ref":"Severity","required":true},
            "date": {"dataType":"double","required":true},
            "hippoDocumentBean": {"dataType":"boolean","required":true},
            "hippoFolderBean": {"dataType":"boolean","required":true},
            "versionedNode": {"dataType":"boolean","required":true},
            "leaf": {"dataType":"boolean","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Threat1": {
        "dataType": "refEnum",
        "enums": ["","Vulnerability"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ThreatAffect1": {
        "dataType": "refObject",
        "properties": {
            "hippoDocumentBean": {"dataType":"boolean","required":true},
            "hippoFolderBean": {"dataType":"boolean","required":true},
            "versionedNode": {"dataType":"boolean","required":true},
            "leaf": {"dataType":"boolean","required":true},
            "platformText": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "RemediationStep1": {
        "dataType": "refObject",
        "properties": {
            "link": {"dataType":"string","required":true},
            "type": {"dataType":"string","required":true},
            "hippoDocumentBean": {"dataType":"boolean","required":true},
            "hippoFolderBean": {"dataType":"boolean","required":true},
            "versionedNode": {"dataType":"boolean","required":true},
            "leaf": {"dataType":"boolean","required":true},
            "step": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CveIdentifier1": {
        "dataType": "refObject",
        "properties": {
            "cveStatus": {"dataType":"string","required":true},
            "cveIdentifier": {"dataType":"string","required":true},
            "hippoDocumentBean": {"dataType":"boolean","required":true},
            "hippoFolderBean": {"dataType":"boolean","required":true},
            "versionedNode": {"dataType":"boolean","required":true},
            "leaf": {"dataType":"boolean","required":true},
            "cveText": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SectionType": {
        "dataType": "refEnum",
        "enums": ["website-section"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Section1": {
        "dataType": "refObject",
        "properties": {
            "sectionType": {"ref":"SectionType","required":true},
            "isNumberedList": {"dataType":"boolean","required":true},
            "title": {"dataType":"string","required":true},
            "type": {"dataType":"string","required":true},
            "hippoDocumentBean": {"dataType":"boolean","required":true},
            "hippoFolderBean": {"dataType":"boolean","required":true},
            "versionedNode": {"dataType":"boolean","required":true},
            "leaf": {"dataType":"boolean","required":true},
            "html": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Category": {
        "dataType": "refEnum",
        "enums": ["","Exploit"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Item1": {
        "dataType": "refObject",
        "properties": {
            "threatId": {"dataType":"string","required":true},
            "sourceOfThreatUpdates": {"dataType":"array","array":{"dataType":"any"},"required":true},
            "cyberAcknowledgements": {"dataType":"array","array":{"dataType":"any"},"required":true},
            "severityStatusHistory": {"dataType":"array","array":{"dataType":"refObject","ref":"SeverityStatusHistory1"},"required":true},
            "threatType": {"ref":"Threat1","required":true},
            "threatvector": {"dataType":"array","array":{"dataType":"refEnum","ref":"Threat1"},"required":true},
            "threatAffects": {"dataType":"array","array":{"dataType":"refObject","ref":"ThreatAffect1"},"required":true},
            "threatUpdates": {"dataType":"array","array":{"dataType":"any"},"required":true},
            "remediationSteps": {"dataType":"array","array":{"dataType":"refObject","ref":"RemediationStep1"},"required":true},
            "indicatorsCompromise": {"dataType":"array","array":{"dataType":"any"},"required":true},
            "ncscLink": {"dataType":"string","required":true},
            "cveIdentifiers": {"dataType":"array","array":{"dataType":"refObject","ref":"CveIdentifier1"},"required":true},
            "shortsummary": {"dataType":"string","required":true},
            "publishedDate": {"dataType":"double","required":true},
            "severity": {"ref":"Severity","required":true},
            "sections": {"dataType":"array","array":{"dataType":"refObject","ref":"Section1"},"required":true},
            "basePath": {"dataType":"string","required":true},
            "category": {"dataType":"array","array":{"dataType":"refEnum","ref":"Category"},"required":true},
            "fullTaxonomyList": {"dataType":"array","array":{"dataType":"any"},"required":true},
            "title": {"dataType":"string","required":true},
            "versionedNode": {"dataType":"boolean","required":true},
            "remediationIntro": {"dataType":"string","required":true},
            "summary": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Welcome": {
        "dataType": "refObject",
        "properties": {
            "pageSize": {"dataType":"double","required":true},
            "total": {"dataType":"double","required":true},
            "items": {"dataType":"array","array":{"dataType":"refObject","ref":"Item1"},"required":true},
            "currentPage": {"dataType":"double","required":true},
            "totalPages": {"dataType":"double","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Section": {
        "dataType": "refObject",
        "properties": {
            "title": {"dataType":"string","required":true},
            "isNumberedList": {"dataType":"boolean","required":true},
            "headingLevel": {"dataType":"string","required":true},
            "sectionType": {"dataType":"string","required":true},
            "type": {"dataType":"string","required":true},
            "hippoDocumentBean": {"dataType":"boolean","required":true},
            "hippoFolderBean": {"dataType":"boolean","required":true},
            "versionedNode": {"dataType":"boolean","required":true},
            "leaf": {"dataType":"boolean","required":true},
            "html": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SeverityStatusHistory": {
        "dataType": "refObject",
        "properties": {
            "severity": {"dataType":"string","required":true},
            "date": {"dataType":"double","required":true},
            "hippoDocumentBean": {"dataType":"boolean","required":true},
            "hippoFolderBean": {"dataType":"boolean","required":true},
            "versionedNode": {"dataType":"boolean","required":true},
            "leaf": {"dataType":"boolean","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IndicatorsCompromise": {
        "dataType": "refObject",
        "properties": {
            "audience": {"dataType":"string","required":true},
            "heading": {"dataType":"string","required":true},
            "sectionType": {"dataType":"string","required":true},
            "hippoDocumentBean": {"dataType":"boolean","required":true},
            "hippoFolderBean": {"dataType":"boolean","required":true},
            "versionedNode": {"dataType":"boolean","required":true},
            "leaf": {"dataType":"boolean","required":true},
            "content": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CveIdentifier": {
        "dataType": "refObject",
        "properties": {
            "cveIdentifier": {"dataType":"string","required":true},
            "cveStatus": {"dataType":"string","required":true},
            "hippoDocumentBean": {"dataType":"boolean","required":true},
            "hippoFolderBean": {"dataType":"boolean","required":true},
            "versionedNode": {"dataType":"boolean","required":true},
            "leaf": {"dataType":"boolean","required":true},
            "cveText": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ThreatAffect": {
        "dataType": "refObject",
        "properties": {
            "versionsAffected": {"dataType":"array","array":{"dataType":"string"},"required":true},
            "hippoDocumentBean": {"dataType":"boolean","required":true},
            "hippoFolderBean": {"dataType":"boolean","required":true},
            "versionedNode": {"dataType":"boolean","required":true},
            "leaf": {"dataType":"boolean","required":true},
            "platformText": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "RemediationStep": {
        "dataType": "refObject",
        "properties": {
            "link": {"dataType":"string","required":true},
            "type": {"dataType":"string","required":true},
            "hippoDocumentBean": {"dataType":"boolean","required":true},
            "hippoFolderBean": {"dataType":"boolean","required":true},
            "versionedNode": {"dataType":"boolean","required":true},
            "leaf": {"dataType":"boolean","required":true},
            "step": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Welcome1": {
        "dataType": "refObject",
        "properties": {
            "severity": {"dataType":"string","required":true},
            "category": {"dataType":"array","array":{"dataType":"string"},"required":true},
            "basePath": {"dataType":"string","required":true},
            "sections": {"dataType":"array","array":{"dataType":"refObject","ref":"Section"},"required":true},
            "threatId": {"dataType":"string","required":true},
            "shortsummary": {"dataType":"string","required":true},
            "publishedDate": {"dataType":"double","required":true},
            "fullTaxonomyList": {"dataType":"array","array":{"dataType":"any"},"required":true},
            "seosummaryJson": {"dataType":"string","required":true},
            "sourceOfThreatUpdates": {"dataType":"array","array":{"dataType":"string"},"required":true},
            "cyberAcknowledgements": {"dataType":"array","array":{"dataType":"any"},"required":true},
            "severityStatusHistory": {"dataType":"array","array":{"dataType":"refObject","ref":"SeverityStatusHistory"},"required":true},
            "indicatorsCompromise": {"dataType":"array","array":{"dataType":"refObject","ref":"IndicatorsCompromise"},"required":true},
            "cveIdentifiers": {"dataType":"array","array":{"dataType":"refObject","ref":"CveIdentifier"},"required":true},
            "threatType": {"dataType":"string","required":true},
            "threatvector": {"dataType":"array","array":{"dataType":"any"},"required":true},
            "threatAffects": {"dataType":"array","array":{"dataType":"refObject","ref":"ThreatAffect"},"required":true},
            "threatUpdates": {"dataType":"array","array":{"dataType":"any"},"required":true},
            "remediationSteps": {"dataType":"array","array":{"dataType":"refObject","ref":"RemediationStep"},"required":true},
            "ncscLink": {"dataType":"string","required":true},
            "title": {"dataType":"string","required":true},
            "versionedNode": {"dataType":"boolean","required":true},
            "remediationIntro": {"dataType":"string","required":true},
            "summary": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IGetListDataSetsResponse": {
        "dataType": "refObject",
        "properties": {
            "help": {"dataType":"string","required":true},
            "success": {"dataType":"boolean","required":true},
            "result": {"dataType":"array","array":{"dataType":"string"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ColumnType2": {
        "dataType": "refEnum",
        "enums": ["date","int","varchar"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IsNullable2": {
        "dataType": "refEnum",
        "enums": ["No","Yes"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Welcome2": {
        "dataType": "refObject",
        "properties": {
            "column_type": {"ref":"ColumnType2","required":true},
            "max_length": {"dataType":"union","subSchemas":[{"dataType":"double"},{"dataType":"enum","enums":[null]}],"required":true},
            "is_nullable": {"ref":"IsNullable2","required":true},
            "primary_key": {"ref":"IsNullable2","required":true},
            "extended_properties": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Welcome4": {
        "dataType": "refObject",
        "properties": {
            "ONS_CHD_GEO_LISTINGS_KEY": {"dataType":"double","required":true},
            "GEOGRAPHY_CODE": {"dataType":"string","required":true},
            "GEOGRAPHY_NAME": {"dataType":"string","required":true},
            "WELSH_GEOGRAPHY_NAME": {"dataType":"enum","enums":[null],"required":true},
            "SI_NUMBER": {"dataType":"string","required":true},
            "SI_TITLE": {"dataType":"string","required":true},
            "DATE_OF_OPERATION": {"dataType":"datetime","required":true},
            "DATE_OF_TERMINATION": {"dataType":"datetime","required":true},
            "PARENT_GEOGRAPHY_CODE": {"dataType":"string","required":true},
            "ENTITY_CODE": {"dataType":"string","required":true},
            "ENTITY_OWNER": {"dataType":"string","required":true},
            "IS_CURRENT": {"dataType":"double","required":true},
            "SYSTEM_CREATED_DATE": {"dataType":"datetime","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Search3": {
        "dataType": "refObject",
        "properties": {
            "score": {"dataType":"double","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Security3": {
        "dataType": "refObject",
        "properties": {
            "system": {"dataType":"string","required":true},
            "code": {"dataType":"string","required":true},
            "display": {"dataType":"string","required":true},
            "version": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Relationship3": {
        "dataType": "refObject",
        "properties": {
            "coding": {"dataType":"array","array":{"dataType":"refObject","ref":"Security3"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IdentifierExtension3": {
        "dataType": "refObject",
        "properties": {
            "url": {"dataType":"string","required":true},
            "valueCodeableConcept": {"ref":"Relationship3","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IdentifierElement3": {
        "dataType": "refObject",
        "properties": {
            "system": {"dataType":"string","required":true},
            "value": {"dataType":"string","required":true},
            "extension": {"dataType":"array","array":{"dataType":"refObject","ref":"IdentifierExtension3"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Meta3": {
        "dataType": "refObject",
        "properties": {
            "versionId": {"dataType":"string","required":true},
            "security": {"dataType":"array","array":{"dataType":"refObject","ref":"Security3"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Period3": {
        "dataType": "refObject",
        "properties": {
            "start": {"dataType":"datetime","required":true},
            "end": {"dataType":"datetime","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Name3": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "use": {"dataType":"string","required":true},
            "period": {"ref":"Period3","required":true},
            "given": {"dataType":"array","array":{"dataType":"string"},"required":true},
            "family": {"dataType":"string","required":true},
            "prefix": {"dataType":"array","array":{"dataType":"string"},"required":true},
            "suffix": {"dataType":"array","array":{"dataType":"string"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ValueCoding3": {
        "dataType": "refObject",
        "properties": {
            "system": {"dataType":"string","required":true},
            "code": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PurpleExtension3": {
        "dataType": "refObject",
        "properties": {
            "url": {"dataType":"string","required":true},
            "valueCoding": {"ref":"ValueCoding3"},
            "valueString": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AddressExtension3": {
        "dataType": "refObject",
        "properties": {
            "url": {"dataType":"string","required":true},
            "extension": {"dataType":"array","array":{"dataType":"refObject","ref":"PurpleExtension3"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Address3": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "period": {"ref":"Period3","required":true},
            "use": {"dataType":"string","required":true},
            "line": {"dataType":"array","array":{"dataType":"string"},"required":true},
            "postalCode": {"dataType":"string","required":true},
            "extension": {"dataType":"array","array":{"dataType":"refObject","ref":"AddressExtension3"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TelecomExtension3": {
        "dataType": "refObject",
        "properties": {
            "url": {"dataType":"string","required":true},
            "valueCoding": {"ref":"Security3","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ResourceTelecom3": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "period": {"ref":"Period3","required":true},
            "system": {"dataType":"string","required":true},
            "value": {"dataType":"string","required":true},
            "use": {"dataType":"string","required":true},
            "extension": {"dataType":"array","array":{"dataType":"refObject","ref":"TelecomExtension3"}},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ContactTelecom3": {
        "dataType": "refObject",
        "properties": {
            "system": {"dataType":"string","required":true},
            "value": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Contact3": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "period": {"ref":"Period3","required":true},
            "relationship": {"dataType":"array","array":{"dataType":"refObject","ref":"Relationship3"},"required":true},
            "telecom": {"dataType":"array","array":{"dataType":"refObject","ref":"ContactTelecom3"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "GeneralPractitionerIdentifier3": {
        "dataType": "refObject",
        "properties": {
            "system": {"dataType":"string","required":true},
            "value": {"dataType":"string","required":true},
            "period": {"ref":"Period3","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "GeneralPractitioner3": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "type": {"dataType":"string","required":true},
            "identifier": {"ref":"GeneralPractitionerIdentifier3","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "FluffyExtension3": {
        "dataType": "refObject",
        "properties": {
            "url": {"dataType":"string","required":true},
            "valueCodeableConcept": {"ref":"Relationship3"},
            "valueDateTime": {"dataType":"datetime"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ResourceExtension3": {
        "dataType": "refObject",
        "properties": {
            "url": {"dataType":"string","required":true},
            "extension": {"dataType":"array","array":{"dataType":"refObject","ref":"FluffyExtension3"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Resource3": {
        "dataType": "refObject",
        "properties": {
            "resourceType": {"dataType":"string","required":true},
            "id": {"dataType":"string","required":true},
            "identifier": {"dataType":"array","array":{"dataType":"refObject","ref":"IdentifierElement3"},"required":true},
            "meta": {"ref":"Meta3","required":true},
            "name": {"dataType":"array","array":{"dataType":"refObject","ref":"Name3"},"required":true},
            "gender": {"dataType":"string","required":true},
            "birthDate": {"dataType":"datetime","required":true},
            "multipleBirthInteger": {"dataType":"double","required":true},
            "deceasedDateTime": {"dataType":"datetime","required":true},
            "address": {"dataType":"array","array":{"dataType":"refObject","ref":"Address3"},"required":true},
            "telecom": {"dataType":"array","array":{"dataType":"refObject","ref":"ResourceTelecom3"},"required":true},
            "contact": {"dataType":"array","array":{"dataType":"refObject","ref":"Contact3"},"required":true},
            "generalPractitioner": {"dataType":"array","array":{"dataType":"refObject","ref":"GeneralPractitioner3"},"required":true},
            "extension": {"dataType":"array","array":{"dataType":"refObject","ref":"ResourceExtension3"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Entry3": {
        "dataType": "refObject",
        "properties": {
            "fullUrl": {"dataType":"string","required":true},
            "search": {"ref":"Search3","required":true},
            "resource": {"ref":"Resource3","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "personalDemo": {
        "dataType": "refObject",
        "properties": {
            "resourceType": {"dataType":"string","required":true},
            "type": {"dataType":"string","required":true},
            "timestamp": {"dataType":"datetime","required":true},
            "total": {"dataType":"double","required":true},
            "entry": {"dataType":"array","array":{"dataType":"refObject","ref":"Entry3"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const validationService = new ValidationService(models);

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

export function RegisterRoutes(app: express.Router) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
        app.post('/v1/ambulance-data-submission/process-message',

            function AmbulanceController_PostAmbulanceData(request: any, response: any, next: any) {
            const args = {
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new AmbulanceController();


            const promise = controller.PostAmbulanceData.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/bank-holidays.json',

            function BankHolidaysController_getBankHolidays(request: any, response: any, next: any) {
            const args = {
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new BankHolidaysController();


            const promise = controller.getBankHolidays.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/CyberAlerts',

            function CyberController_getCyberAlerts(request: any, response: any, next: any) {
            const args = {
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new CyberController();


            const promise = controller.getCyberAlerts.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/CyberAlerts/limited/:bool',

            function CyberController_getCyberAlerts1(request: any, response: any, next: any) {
            const args = {
                    bool: {"in":"path","name":"bool","required":true,"dataType":"boolean"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new CyberController();


            const promise = controller.getCyberAlerts1.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/CyberAlerts/page/:pageNo',

            function CyberController_getCyberAlerts2(request: any, response: any, next: any) {
            const args = {
                    pageNo: {"in":"path","name":"pageNo","required":true,"dataType":"double"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new CyberController();


            const promise = controller.getCyberAlerts2.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/CyberAlerts/thread/:threadId',

            function CyberController_getCyberAlerts3(request: any, response: any, next: any) {
            const args = {
                    threadId: {"in":"path","name":"threadId","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new CyberController();


            const promise = controller.getCyberAlerts3.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/data.gov.uk/package_list',

            function DataGovUkController_getPackageList(request: any, response: any, next: any) {
            const args = {
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new DataGovUkController();


            const promise = controller.getPackageList.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/dataRegister/service',

            function DataRegisterController_GetDataSerivce(request: any, response: any, next: any) {
            const args = {
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new DataRegisterController();


            const promise = controller.GetDataSerivce.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/dataRegister/dbo/table',

            function DataRegisterController_GetallTable(request: any, response: any, next: any) {
            const args = {
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new DataRegisterController();


            const promise = controller.GetallTable.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/dataRegister/dbo/table/ONS_CHD_GEO_LISTINGS/column',

            function DataRegisterController_GetallCol_inTable(request: any, response: any, next: any) {
            const args = {
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new DataRegisterController();


            const promise = controller.GetallCol_inTable.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/dataRegister/dbo/table/ONS_CHD_GEO_LISTINGS/query/:pageNo',

            function DataRegisterController_queryPageNo(request: any, response: any, next: any) {
            const args = {
                    pageNo: {"in":"path","name":"pageNo","required":true,"dataType":"double"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new DataRegisterController();


            const promise = controller.queryPageNo.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/dataRegister/dbo/table/ONS_CHD_GEO_LISTINGS/query/download/:bool',

            function DataRegisterController_queryTableDownload(request: any, response: any, next: any) {
            const args = {
                    bool: {"in":"path","name":"bool","required":true,"dataType":"boolean"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new DataRegisterController();


            const promise = controller.queryTableDownload.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/dataRegister/dbo/table/ONS_CHD_GEO_LISTINGS/query/filter/:filter',

            function DataRegisterController_filterItems(request: any, response: any, next: any) {
            const args = {
                    filter: {"in":"path","name":"filter","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new DataRegisterController();


            const promise = controller.filterItems.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/personalDemoGraphics',

            function PersonalDemoController_getPatientData(request: any, response: any, next: any) {
            const args = {
                    abc: {"in":"header","name":"abc","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new PersonalDemoController();


            const promise = controller.getPatientData.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function isController(object: any): object is Controller {
        return 'getHeaders' in object && 'getStatus' in object && 'setStatus' in object;
    }

    function promiseHandler(controllerObj: any, promise: any, response: any, successStatus: any, next: any) {
        return Promise.resolve(promise)
            .then((data: any) => {
                let statusCode = successStatus;
                let headers;
                if (isController(controllerObj)) {
                    headers = controllerObj.getHeaders();
                    statusCode = controllerObj.getStatus() || statusCode;
                }

                // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

                returnHandler(response, statusCode, data, headers)
            })
            .catch((error: any) => next(error));
    }

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function returnHandler(response: any, statusCode?: number, data?: any, headers: any = {}) {
        if (response.headersSent) {
            return;
        }
        Object.keys(headers).forEach((name: string) => {
            response.set(name, headers[name]);
        });
        if (data && typeof data.pipe === 'function' && data.readable && typeof data._read === 'function') {
            data.pipe(response);
        } else if (data !== null && data !== undefined) {
            response.status(statusCode || 200).json(data);
        } else {
            response.status(statusCode || 204).end();
        }
    }

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function responder(response: any): TsoaResponse<HttpStatusCodeLiteral, unknown>  {
        return function(status, data, headers) {
            returnHandler(response, status, data, headers);
        };
    };

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function getValidatedArgs(args: any, request: any, response: any): any[] {
        const fieldErrors: FieldErrors  = {};
        const values = Object.keys(args).map((key) => {
            const name = args[key].name;
            switch (args[key].in) {
                case 'request':
                    return request;
                case 'query':
                    return validationService.ValidateParam(args[key], request.query[name], name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                case 'path':
                    return validationService.ValidateParam(args[key], request.params[name], name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                case 'header':
                    return validationService.ValidateParam(args[key], request.header(name), name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                case 'body':
                    return validationService.ValidateParam(args[key], request.body, name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                case 'body-prop':
                    return validationService.ValidateParam(args[key], request.body[name], name, fieldErrors, 'body.', {"noImplicitAdditionalProperties":"throw-on-extras"});
                case 'formData':
                    if (args[key].dataType === 'file') {
                        return validationService.ValidateParam(args[key], request.file, name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                    } else if (args[key].dataType === 'array' && args[key].array.dataType === 'file') {
                        return validationService.ValidateParam(args[key], request.files, name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                    } else {
                        return validationService.ValidateParam(args[key], request.body[name], name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                    }
                case 'res':
                    return responder(response);
            }
        });

        if (Object.keys(fieldErrors).length > 0) {
            throw new ValidateError(fieldErrors, '');
        }
        return values;
    }

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
