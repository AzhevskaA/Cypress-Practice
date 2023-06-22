/// <reference types="cypress" />

import {LoginPage} from "../e2e/LoginPage";
import {homePage} from "../e2e/HomePage"

describe ('Log in tests',() => {
    let validEmail='anastasia.azhevskaya+399@workiz.com'
   
    beforeEach(() => {
        cy.visit('/')
        let loginPage = new LoginPage();
        loginPage.login(validEmail,'stagingpass');
       
    });

it ('regular log in', () =>{

    let HomePage = new homePage();
    HomePage.openGear();

    cy.get('.pName').should('have.text', 'Joe Acme');
})

//it ('log in with user which dont exist', () =>{

   // let loginPage = new LoginPage();
    //loginPage.login('anastasia@workiz.com','stagingpass');

   // cy.get('._notify.__error').should('have.text', 'login attempt failed , check user and password');

    
//})
it ('regular log out', () =>{
    
    let HomePage = new homePage();
    HomePage.openGear();

    cy.get('a').contains('Log Out').click();
    cy.wait(10000);
    cy.get('h1').contains('Login');

})
it ('regular log in', () =>{
    

    cy.get('.styles__frameHeader___294SI').should('have.length', 15);

})

})
