Feature: Calendar functionality

  Background: Start from the calendar page
    Given That I am on the calendar page

  Scenario: Adding a todo to a date
    When I click on the "1" box
    And I add "testing the feature" to the todo list
    Then It should read "testing the feature" in the todo list

  Scenario: Deleting a todo from a date
    When I click on the "2" box
    And I add "testing the feature" to the todo list
    And I click the remove button on the "testing the feature" todo
    Then It should remove "testing the feature" from the todo list