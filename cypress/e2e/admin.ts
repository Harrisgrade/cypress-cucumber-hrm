import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import { adminEl } from "../elements/admin";

Given("I am on the admin page", () => {
  cy.login("","");
  cy.visit("opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers")
  cy.url().should('include', '/viewSystemUsers');
});

When("I type and submit a user search", () => {
    cy.get(adminEl.getUserField).type('Admin');
    cy.get(adminEl.getSearchButton).click();
});

Then("I should see the updated user search list", () => {
 cy.get(adminEl.getFirstUser).should("exist").and("contain", "Admin");
});

When("I click the add user button", () => {
cy.get(adminEl.getAddUserButton).click();
});

Then("I should be taken to the add user page", () => {
  cy.url().should('include', '/saveSystemUser');
});