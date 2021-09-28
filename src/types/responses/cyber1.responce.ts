export interface Welcome1 {
  severity: string
  category: string[]
  basePath: string
  sections: Section[]
  threatId: string
  shortsummary: string
  publishedDate: number
  fullTaxonomyList: any[]
  seosummaryJson: string
  sourceOfThreatUpdates: string[]
  cyberAcknowledgements: any[]
  severityStatusHistory: SeverityStatusHistory[]
  indicatorsCompromise: IndicatorsCompromise[]
  cveIdentifiers: CveIdentifier[]
  threatType: string
  threatvector: any[]
  threatAffects: ThreatAffect[]
  threatUpdates: any[]
  remediationSteps: RemediationStep[]
  ncscLink: string
  title: string
  versionedNode: boolean
  remediationIntro: string
  summary: string
}

export interface CveIdentifier {
  cveIdentifier: string
  cveStatus: string
  hippoDocumentBean: boolean
  hippoFolderBean: boolean
  versionedNode: boolean
  leaf: boolean
  cveText: string
}

export interface IndicatorsCompromise {
  audience: string
  heading: string
  sectionType: string
  hippoDocumentBean: boolean
  hippoFolderBean: boolean
  versionedNode: boolean
  leaf: boolean
  content: string
}

export interface RemediationStep {
  link: string
  type: string
  hippoDocumentBean: boolean
  hippoFolderBean: boolean
  versionedNode: boolean
  leaf: boolean
  step: string
}

export interface Section {
  title: string
  isNumberedList: boolean
  headingLevel: string
  sectionType: string
  type: string
  hippoDocumentBean: boolean
  hippoFolderBean: boolean
  versionedNode: boolean
  leaf: boolean
  html: string
}

export interface SeverityStatusHistory {
  severity: string
  date: number
  hippoDocumentBean: boolean
  hippoFolderBean: boolean
  versionedNode: boolean
  leaf: boolean
}

export interface ThreatAffect {
  versionsAffected: string[]
  hippoDocumentBean: boolean
  hippoFolderBean: boolean
  versionedNode: boolean
  leaf: boolean
  platformText: string
}
