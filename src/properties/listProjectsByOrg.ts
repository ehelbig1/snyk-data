import { Severity, Environment, Lifecycle } from './core.js';

export class ListProjectsByOrgProperties {
    private _properties: Properties;

    constructor() {
        this._properties = {
            filters: {}
        }
    }

    properties(): Properties {
        return this._properties;
    }

    name(name: string): ListProjectsByOrgProperties {
        this._properties.filters.name = name;
        return this;
    }
}

interface Properties {
    filters: Filters
}

interface Filters {
    name?: string,
    origin?: string,
    type?: string,
    isMonitored?: boolean,
    tags?: Tags,
    attributes?: Attributes
}

interface Tags {
    includes: Tag[]
}

interface Tag {
    key: string,
    value: string
}

interface Attributes {
    criticality?: Severity[],
    environment?: Environment[],
    lifecycle?: Lifecycle[]
}