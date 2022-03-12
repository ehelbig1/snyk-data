export default interface ListIssuesByProjectResponse {
    issues: Issue[];
}

interface Issue {
    id: string;
    issueType: string;
    pkgName: string;
    pkgVersions: string[];
    issueData: IssueData;
    introducedThrough: IntroducedThrough[];
    isPatched: boolean;
    isIgnored: boolean;
    ignoreReasons: IgnoreReason[];
    fixInfo: FixInfo;
    priority: Priority;
    priorityScore?: number;
    links: Links;
}

interface IssueData {
    id: string;
    title: string;
    severity: string;
    originalSeverity: string;
    url: string;
    description: string;
    identifiers: Identifiers;
    credit: string[];
    exploitMaturity: string;
    semver: SemVer;
    publicationTime: string;
    disclosureTime: string;
    CVSSv3: string;
    cvssScore: string;
    language: string;
    patches: Patch[];
    nearestFixedInVersion: string;
    path: string;
    violatedPolicyPublicId: string;
    isMaliciousPackage: boolean;
}

interface Identifiers {
    CVE: string[];
    CWE: string[];
    OSVDB: string[];
}

interface SemVer {
    vulnerable: string;
    unaffected: string;
}

interface Patch {
    id: string;
    urls: string[];
    version: string;
    comments: string[];
    modificationTime: string;
}

interface IntroducedThrough {
    kind: string;
    data: Record<string, unknown>;
}

interface IgnoreReason {
    reason: string;
    expires: string;
    source: string;
}

interface FixInfo {
    isUpgradable: boolean;
    isPinnable: boolean;
    isPatchable: boolean;
    isFixable: boolean;
    isPartiallyFixable: boolean;
    nearestFixedInVersion: string;
    fixedIn: string[];
}

interface Priority {
    score: number;
    factors: string | Record<string, unknown>[];
}

interface Links {
    paths: string;
}