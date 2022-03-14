export interface Project {
    name: string;
    id: string;
    created: string;
    origin: string;
    type: string;
    readOnly: boolean;
    testFrequency: string;
    totalDependencies: number;
    issueCountsBySeverity: {
        low: number;
        medium: number;
        high: number;
        critical: number;
    };
    imageId?: string;
    imageTag: string;
    imageBaseImage: string;
    imagePlatform: string;
    imageCluster?: string;
    hostname?: string;
    remoteRepoUrl?: string;
    lastTestedDate: string;
    owner: User | null;
    browseUrl: string;
    importingUser: User;
    isMonitored: boolean;
    branch: string | null;
    tags: Tag[];
    attributes: Attributes;
    remediation?: Remediation;
}

interface User {
    id: string;
    name: string;
    username: string;
    email: string;
}

interface Tag {
    key: string;
    value: string;
}

interface Attributes {
    criticality: Criticality[];
    environment: Environment[];
    lifecycle: Lifecycle[];
}

interface Criticality {
    critical: string;
    high: string;
    medium: string;
    low: string;
}

interface Environment {
    frontend: string;
    backend: string;
    internal: string;
    external: string;
    mobile: string;
    saas: string;
    onprem: string;
    hosted: string;
    distributed: string;
}

interface Lifecycle {
    production: string;
    development: string;
    sandbox: string;
}

interface Remediation {
    upgrade: Upgrade;
    patch: Patch;
    pin: Pin;
}

interface Upgrade {
    upgradeTo: string;
    upgrades: string[];
    vulns: string[];
}

interface Patch {
    paths: string[];
}

interface Pin {
    upgradeTo: string;
    vulns: string[];
    isTransitive: boolean;
}