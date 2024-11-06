import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import { pimEl } from "../elements/PIM";

Given("I am on the PIM page", () => {
  cy.login("","");
  cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/pim/configurePim")
});

When("The configuration dropdown is selected", () => {
    cy.get(pimEl.getConfigurationButton).click();
});

Then("I should see the options displayed correctly", () => {
  cy.get(pimEl.getConfigFields).find('li').then(($li) => {
    const text = $li;
    cy.wrap(text).eq(0).should('contain.text', 'Optional Fields');
    cy.wrap(text).eq(1).should('contain.text', 'Custom Fields');
    cy.wrap(text).eq(2).should('contain.text', 'Data Import');
    cy.wrap(text).eq(3).should('contain.text', 'Reporting Methods');
    cy.wrap(text).eq(4).should('contain.text', 'Termination Reasons');
  });
});