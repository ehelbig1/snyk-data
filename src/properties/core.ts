export enum Severity {
    CRITICAL = 'critical',
    HIGH = 'high',
    MEDIUM = 'medium',
    LOW = 'low'
}

export enum Environment {
    FRONTEND = 'frontend',
    BACKEND = 'backend',
    INTERNAL = 'internal',
    EXTERNAL = 'external',
    MOBILE = 'mobile',
    SAAS = 'saas',
    ONPREM = 'onprem',
    HOSTED = 'hosted',
    DISTRIBUTED = 'distributed'
}

export enum Lifecycle {
    PRODUCTION = 'production',
    SANDBOX = 'sandbox',
    DEVELOPMENT = 'development'
}

export enum ExploitMaturity {
    MATURE = 'mature',
    PROOF_OF_CONCEPT = 'proof-of-concept',
    NO_KNOWN_EXPLOIT = 'no-known-exploit',
    NO_DATA = 'no-data'
}

export enum VulnerabilityType {
    VULN = 'vuln',
    LICENSE = 'license'
}