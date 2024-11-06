/// <reference types="cypress" />

Cypress.Commands.add('login', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com");
    cy.get("[name='username']").type(Cypress.env('user_name'));
    cy.get("[name='password']").type(Cypress.env('password'));
    cy.get("button").click({ force: true });
  cy.url().should('contain', '/index') 
})
