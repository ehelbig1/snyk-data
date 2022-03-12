import { Severity, ExploitMaturity, VulnerabilityType } from './core.js';

export class ListIssuesByProjectProperties {
    private _properties: Properties;

    constructor() {
        this._properties = {
            filters: {}
        };
    }

    properties(): Properties {
        return this._properties;
    }

    severities(severities: string[]): ListIssuesByProjectProperties {
        this._properties.filters.severities = severities
                .map(severity => {
                    switch (severity) {
                        case 'critical':
                            return Severity.CRITICAL;
                        case 'high':
                            return Severity.HIGH;
                        case 'medium':
                            return Severity.MEDIUM;
                        case 'low':
                            return Severity.LOW;
                        default:
                            throw Error("Severity must be one of: critical, high, medium, or low.");
                    }
                });

        return this;
    }
}

interface Properties {
    inlcudeDescription?: boolean,
    includeIntroducedThrough?: boolean,
    filters: Filters
}

interface Filters {
    severities?: Severity[],
    exploitMaturity?: ExploitMaturity[],
    type?: VulnerabilityType[],
    ignored?: boolean,
    patched?: boolean,
    priority?: Priority
}

interface Priority {
    score?: Score
}

interface Score {
    min?: number,
    max?: number
}
