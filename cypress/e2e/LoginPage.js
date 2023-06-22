export class LoginPage {
    login(email, password){
    cy.get('#email').type(email);
    cy.get('#password').type(password);
    cy.get('a._loginBtn').click();

    } 

}