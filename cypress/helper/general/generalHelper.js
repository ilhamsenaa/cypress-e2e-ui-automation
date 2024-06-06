import { faker } from '@faker-js/faker';

export default class generalHelper {
    static generatePhoneNumber(nation = 'id') {
        if (nation !== 'id') {
            return faker.phone.number('3#######');
        }
        return faker.phone.number('08##########');
    }

    static generateName() {
        return {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName()
        }
    }
}