import axios from 'axios';

import ListOrgsResponse from './model/listOrgsResponse.js';
import ListProjectsByOrgResponse from './model/listProjectsByOrgResponse.js';
import ListIssuesByProjectResponse from './model/listIssuesByProject.js';

import { ListProjectsByOrgProperties, ListIssuesByProjectProperties } from './properties/index.js';

interface IDatasource {
    listOrgs: () => Promise<ListOrgsResponse>;
    listProjectsByOrg: (orgId: string, properties: ListProjectsByOrgProperties) => Promise<ListProjectsByOrgResponse>;
    listIssuesByProject: (orgId: string, projectId: string, properties: ListIssuesByProjectProperties) => Promise<ListIssuesByProjectResponse>;
}

export class Datasource implements IDatasource {
    private baseUrl = 'https://snyk.io/api'
    private apiToken: string;

    constructor() {
        if (process.env.SNYK_API_TOKEN) {
            this.apiToken = process.env.SNYK_API_TOKEN;
        } else {
            throw new Error('Must provide SNYK_API_TOKEN environment varialble');
        }
    }

    async listOrgs(): Promise<ListOrgsResponse> {
        try {
            const response = await axios.get<ListOrgsResponse>(`${this.baseUrl}/v1/orgs`, {
                headers: {
                    Authorization: `token ${this.apiToken}`,
                },
            });

            const orgs: ListOrgsResponse = response.data;
            return orgs;
        } catch (error) {
            if (axios.isAxiosError(error)) throw error.message;
            else throw new Error(`Oops, something went wrong\n${error}`);
        }
    }

    async listProjectsByOrg(orgId: string, properties: ListProjectsByOrgProperties): Promise<ListProjectsByOrgResponse> {
        try {
            const response = await axios.post<ListProjectsByOrgResponse>(`${this.baseUrl}/v1/org/${orgId}/projects`, properties.properties(), {
                headers: {
                    Authorization: `token ${this.apiToken}`,
                }
            });

            const projects: ListProjectsByOrgResponse = response.data;
            return projects;
        } catch (error) {
            if (axios.isAxiosError(error)) throw error.message;
            else throw new Error(`Oops, something went wrong\n${error}`);
        }
    }

    async listIssuesByProject(orgId: string, projectId: string, properties: ListIssuesByProjectProperties): Promise<ListIssuesByProjectResponse> {
        try {
            const response = await axios.post<ListIssuesByProjectResponse>(`${this.baseUrl}/v1/org/${orgId}/project/${projectId}/aggregated-issues`, properties.properties(), {
                headers: {
                    Authorization: `token ${this.apiToken}`,
                }
            });

            const issues: ListIssuesByProjectResponse = response.data;
            return issues;
        } catch (error) {
            if (axios.isAxiosError(error)) throw error.message;
            else throw new Error(`Oops, something went wrong\n${error}`);
        }
    }
}
