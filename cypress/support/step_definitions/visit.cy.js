import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('that I am on the home page', () => {
  cy.visit('/');
});

When('I click on the {string} label', (label) => {
  cy.get('a').contains(label).click();
});

Then('I should be redirected to the about us page', () => {
  cy.url().should('include', '/om-oss');
});

Then('should contain employee profiles', () => {
  cy.get('div.profile-1').should('exist');
});

Then('I should be redirected to the news page', () => {
  cy.url().should('include', '/nyheter');
});

When('I click on each individual article', () => {
  // TODO: implement step
});

Then('I should see the content of the articles', () => {
  // TODO: implement step
});

When('I go to a non-existent news article', () => {
  // TODO: implement step
});

Then('I should get to an empty page', () => {
  // TODO: implement step
});
