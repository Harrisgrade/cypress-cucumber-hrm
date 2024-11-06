import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import { dashEl } from "../elements/dash";

Given("I am on empty home page", () => {
  cy.login("","");
});

When("I type and submit in the board name", () => {
  cy.get(dashEl.getTimeCardBtn).click();
});

Then("I should be redirected to the board detail", () => {
  cy.location("pathname").should('contain', '/attendance');
});