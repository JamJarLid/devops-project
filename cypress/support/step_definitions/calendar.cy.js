import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('That I am on the calendar page', () => {
  cy.visit('/calendar');
});

When('I click on the {string} box', (day) => {
  cy.get('div.day').contains(day).trigger('click');
});

When('I add {string} to the todo list', (task) => {
  cy.get('button').contains('Add New Todo').trigger('click');
  cy.get('input').parent('div.add-task').type(task);
  cy.get('button').contains('Add Task').click();
});

Then('It should read {string} in the todo list', (task) => {
  cy.get('li').contains(task).should('exist');
});

When('I click the remove button on the {string} todo', (task) => {
  cy.get('button')
    .parent('li').contains(task)
    .contains('Remove')
    .click();
});

Then('It should remove {string} from the todo list', (task) => {
  cy.get('li').contains(task).should('not.exist');
});
