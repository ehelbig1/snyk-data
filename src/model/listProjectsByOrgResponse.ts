import { Project } from './core';

export default interface ListProjectsByOrgResponse {
    org: Org;
    projects: Project[];
}

interface Org {
    name: string;
    id: string;
}