export interface Welcome {
  pageSize: number
  total: number
  items: Item1[]
  currentPage: number
  totalPages: number
}

export interface Item1 {
  threatId: string
  sourceOfThreatUpdates: any[]
  cyberAcknowledgements: any[]
  severityStatusHistory: SeverityStatusHistory1[]
  threatType: Threat1
  threatvector: Threat1[]
  threatAffects: ThreatAffect1[]
  threatUpdates: any[]
  remediationSteps: RemediationStep1[]
  indicatorsCompromise: any[]
  ncscLink: string
  cveIdentifiers: CveIdentifier1[]
  shortsummary: string
  publishedDate: number
  severity: Severity
  sections: Section1[]
  basePath: string
  category: Category[]
  fullTaxonomyList: any[]
  title: string
  versionedNode: boolean
  remediationIntro: string
  summary: string
}

export enum Category {
  Empty = '',
  Exploit = 'Exploit',
}

export interface CveIdentifier1 {
  cveStatus: string
  cveIdentifier: string
  hippoDocumentBean: boolean
  hippoFolderBean: boolean
  versionedNode: boolean
  leaf: boolean
  cveText: string
}

export interface RemediationStep1 {
  link: string
  type: string
  hippoDocumentBean: boolean
  hippoFolderBean: boolean
  versionedNode: boolean
  leaf: boolean
  step: string
}

export interface Section1 {
  sectionType: SectionType
  isNumberedList: boolean
  title: string
  type: string
  hippoDocumentBean: boolean
  hippoFolderBean: boolean
  versionedNode: boolean
  leaf: boolean
  html: string
}

export enum SectionType {
  WebsiteSection = 'website-section',
}

export enum Severity {
  Low = 'Low',
  Medium = 'Medium',
}

export interface SeverityStatusHistory1 {
  severity: Severity
  date: number
  hippoDocumentBean: boolean
  hippoFolderBean: boolean
  versionedNode: boolean
  leaf: boolean
}

export interface ThreatAffect1 {
  hippoDocumentBean: boolean
  hippoFolderBean: boolean
  versionedNode: boolean
  leaf: boolean
  platformText: string
}

export enum Threat1 {
  Empty = '',
  Vulnerability = 'Vulnerability',
}
