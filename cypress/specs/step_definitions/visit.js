import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that I am on the home page', () => {
  cy.visit('/');
});

When('I click on the {string} label', (label) => {
  cy.get('a')
    .contains(label)
    .click();
});

Then('I should be redirected to the about us page', () => {
  cy.url()
  .should('include', '/om-oss')
});

Then('I should be redirected to the news page', () => {
  cy.url().should('include', '/nyheter');
});