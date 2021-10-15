import { ApiUrl } from '@tt/constants';
import request, { SuperTest, Test } from 'supertest';

export const httpUtil = (url: string): SuperTest<Test> => request(url);

export const githubHttpUtil = (): SuperTest<Test> => request(ApiUrl.GITHUB);
