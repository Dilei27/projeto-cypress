import signupPage from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory'

describe('Scenarios', () => {

    var user = signupFactory.user()
    

    it('Register user', function() {

        signupPage.go()
        cy.get('a').contains('Create an Account').click()

        signupPage.fillForm(user)
        cy.get('button[type="submit"][title="Create an Account"]').click()
        cy.get('div[data-bind$="(message.text)"]').should('have.text', 'Thank you for registering with Main Website Store.')
        
        cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click()
        cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > .authorization-link > a').click()
        
    })

    it('Sign in', function() {

        signupPage.go()
        cy.get('a').contains('Sign In').click()
        cy.get('span[class="base"]').should('have.text', 'Customer Login')

        cy.get('input[id="email"]').type(user.email)
        cy.get('input[name="login[password]"]').type(user.password)
        
        cy.get('input[name="login[username]"]').should('have.value', user.email)
        cy.get('input[name="login[password]"]').should('have.value', user.password)

        cy.get('div.primary button[class="action login primary"]').click()
        cy.get('a[href$="/sale.html"]').should('have.text', 'Sale')

        cy.get('a[href$="/sale.html"]').click()

        cy.get(':nth-child(6) > :nth-child(1) > a').click()
        cy.get('.base').should('have.text', 'Bags')

        cy.get('a[href$="strive-shoulder-pack.html"][class="product-item-link"]').click()
        cy.get('span[class="base"][itemprop="name"]').should('have.text', 'Strive Shoulder Pack')

        cy.get('#product-addtocart-button.action.primary.tocart').click()
        

        cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click()
        cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > .authorization-link > a').click()

        
    })

})

