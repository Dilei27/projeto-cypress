var faker = require('faker')

export default {

    user: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()
                        
        var data = {
            first_name: `${firstName}`,
            last_name: `${lastName}`,
            email: faker.internet.email(firstName),
            password: 'Teste@Automatizado',
            confirm_password: 'Teste@Automatizado'

        }

        return data

    }
}