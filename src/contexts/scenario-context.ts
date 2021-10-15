import { setWorldConstructor, World } from '@cucumber/cucumber';
import { User } from '@tt/interfaces';

export class ScenarioContext extends World {
    user?: User;
}

setWorldConstructor(ScenarioContext);
