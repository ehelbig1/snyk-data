export default interface ListOrgsResponse {
    orgs: Org[];
}

interface Org {
    name: string;
    id: string;
    slug: string;
    url: string;
    group: Group | null;
}

interface Group {
    name: string;
    id: string;
}