export interface personalDemo {
  resourceType: string
  type: string
  timestamp: Date
  total: number
  entry: Entry3[]
}

export interface Entry3 {
  fullUrl: string
  search: Search3
  resource: Resource3
}

export interface Resource3 {
  resourceType: string
  id: string
  identifier: IdentifierElement3[]
  meta: Meta3
  name: Name3[]
  gender: string
  birthDate: Date
  multipleBirthInteger: number
  deceasedDateTime: Date
  address: Address3[]
  telecom: ResourceTelecom3[]
  contact: Contact3[]
  generalPractitioner: GeneralPractitioner3[]
  extension: ResourceExtension3[]
}

export interface Address3 {
  id: string
  period: Period3
  use: string
  line: string[]
  postalCode: string
  extension: AddressExtension3[]
}

export interface AddressExtension3 {
  url: string
  extension: PurpleExtension3[]
}

export interface PurpleExtension3 {
  url: string
  valueCoding?: ValueCoding3
  valueString?: string
}

export interface ValueCoding3 {
  system: string
  code: string
}

export interface Period3 {
  start: Date
  end: Date
}

export interface Contact3 {
  id: string
  period: Period3
  relationship: Relationship3[]
  telecom: ContactTelecom3[]
}

export interface Relationship3 {
  coding: Security3[]
}

export interface Security3 {
  system: string
  code: string
  display: string
  version?: string
}

export interface ContactTelecom3 {
  system: string
  value: string
}

export interface ResourceExtension3 {
  url: string
  extension: FluffyExtension3[]
}

export interface FluffyExtension3 {
  url: string
  valueCodeableConcept?: Relationship3
  valueDateTime?: Date
}

export interface GeneralPractitioner3 {
  id: string
  type: string
  identifier: GeneralPractitionerIdentifier3
}

export interface GeneralPractitionerIdentifier3 {
  system: string
  value: string
  period: Period3
}

export interface IdentifierElement3 {
  system: string
  value: string
  extension: IdentifierExtension3[]
}

export interface IdentifierExtension3 {
  url: string
  valueCodeableConcept: Relationship3
}

export interface Meta3 {
  versionId: string
  security: Security3[]
}

export interface Name3 {
  id: string
  use: string
  period: Period3
  given: string[]
  family: string
  prefix: string[]
  suffix: string[]
}

export interface ResourceTelecom3 {
  id: string
  period: Period3
  system: string
  value: string
  use: string
  extension?: TelecomExtension3[]
}

export interface TelecomExtension3 {
  url: string
  valueCoding: Security3
}

export interface Search3 {
  score: number
}
