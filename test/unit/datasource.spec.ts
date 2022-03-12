import axios from 'axios';

import { Datasource } from '../../src/datasource.js';

import { ListProjectsByOrgProperties, ListIssuesByProjectProperties } from '../../src/properties/index.js';

import mockedListOrgsResponse from '../mock/listOrgsResponse.json';
import mockedListProjectsByOrgResponse from '../mock/listProjectsByOrgResponse.json';
import mockedListIssuesByProjectResponse from '../mock/listIssuesByProjectResponse.json';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

it("should return orgs", async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: mockedListOrgsResponse });

    const datasource = new Datasource();
    const response = await datasource.listOrgs();

    expect(response).toEqual(mockedListOrgsResponse);
})

it('should return projects', async () => {
    mockedAxios.post.mockResolvedValueOnce({ data: mockedListProjectsByOrgResponse });

    const properties = new ListProjectsByOrgProperties()
        .name('test');

    const datasource = new Datasource();
    const response = await datasource.listProjectsByOrg('test', properties);

    expect(response).toEqual(mockedListProjectsByOrgResponse);
})

it('should return issues for project', async () => {
    mockedAxios.post.mockResolvedValueOnce({ data: mockedListIssuesByProjectResponse });

    const properties = new ListIssuesByProjectProperties()
        .severities(['critical', 'high']);

    const datasource = new Datasource();
    const response = await datasource.listIssuesByProject('test', 'test', properties);

    expect(response).toEqual(mockedListIssuesByProjectResponse);
})