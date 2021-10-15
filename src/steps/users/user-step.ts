import { Before, Given, Then, When } from '@cucumber/cucumber';
import { headers } from '@tt/constants';
import { ScenarioContext } from '@tt/contexts';
import { User } from '@tt/interfaces';
import { githubHttpUtil } from '@tt/utils';
import expect from 'expect';

let ctx: ScenarioContext;

Before(function () {
    ctx = this as ScenarioContext;
});

Given(/^I am a public user$/, () => {
    // do nothing
});

When(/^I retrieve a user profile '(.*)'$/, async (username: string) => {
    const response = await githubHttpUtil()
        .get(`/users/${username}`)
        .set(headers);

    expect(response.status).toBe(200);

    ctx.user = response.body as User;
});

Then(/^I should the user profile '(.*)'$/, (username: string) => {
    expect(ctx.user?.login).toBe(username);
});
