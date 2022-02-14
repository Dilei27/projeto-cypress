

class SignupPage {
    
    go() {
        cy.visit('/')
    }  

    fillForm(user) {
                
        cy.get('input[id="firstname"]').type(user.first_name)
        cy.get('input[id="lastname"]').type(user.last_name)
        cy.get('input[id="email_address"]').type(user.email)
        cy.get('input[name="password"][id="password"]').type(user.password)
        cy.get('input[name="password_confirmation"][id="password-confirmation"]').type(user.confirm_password)

        cy.get('input[name="firstname"]').should('have.value', user.first_name)
        cy.get('input[name="lastname"]').should('have.value', user.last_name)
        cy.get('input[name="email"]').should('have.value', user.email)
        cy.get('input[name="password"][id="password"]').should('have.value', user.password)
        cy.get('input[name="password_confirmation"][id="password-confirmation"]').should('have.value', user.confirm_password)
        cy.get('span[class="base"]').should('have.text', 'Create New Customer Account')
            
    }
    
}
export default new SignupPage;