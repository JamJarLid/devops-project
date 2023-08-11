Feature: Visit the different paths of the website
    As a user I want to be able to visit all the pages of the website, so I can wee all the information correctly

    Background: Start from the homepage
        Given that I am on the home page

    Scenario: Visiting the About Us page
        When I click on the "ABOUT US" label
        Then I should be redirected to the about us page
        And should contain employee profiles

    Scenario: Visiting the News page
        When I click on the "NEWS" label
        Then I should be redirected to the news page
        And it should contain news articles

    Scenario: Visiting the published news article
        When I click on the "NEWS" label
        Then I should be able to click on each individual article and see the content of the articles

    Scenario: Visiting a non-existent news article
        When I go to a non-existent news article
        Then I should get to an empty page
