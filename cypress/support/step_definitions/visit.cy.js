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

Then('it should contain news articles', () => {
  cy.get('div.news-article').should('exist');
});

Then(
  'I should be able to click on each individual article and see the content of the articles',
  () => {
    let link_list = [];
    cy.get('a.article-link')
      .each((a) => {
        cy.get(a)
          .invoke('attr', 'href')
          .then((href) => {
            link_list.push(href);
          });
      })
      .then(() => {
        for (let i = 0; i < link_list.length; i++) {
          cy.visit(link_list[i]);
          cy.get('p.article-content').should('exist');
          cy.wait(500);
        }
      });
  }
);

When('I go to a non-existent news article', () => {
  cy.visit('/nyheter/no-article');
});

Then('I should get to an empty page', () => {
  cy.get('header').should('exist');
  cy.get('p.article-content').should('not.exist');
});
