import signupPage from '../pages/SignupPage'

describe('home page', () => {
    it('Page project', () => {
        
        signupPage.go()
        cy.get('.panel > .header > .greet > .not-logged-in').should('have.text', 'Default welcome msg!')

    })
})