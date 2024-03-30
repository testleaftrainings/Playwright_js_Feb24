import {faker} from '@faker-js/faker';
export class GenerateData{

    static getData():string{
        return faker.internet.email();
    }

}