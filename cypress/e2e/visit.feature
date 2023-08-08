Feature: Visit the different paths of the website
    As a user I want to be able to visit all the pages of the website, so I can wee all the information correctly

    Background: Start from the homepage
        Given that I am on the home page

    Scenario: Visiting the About Us page
      When I click on the "OM OSS" label
      Then I should be redirected to the about us page

    Scenario: Visiting the News page
      When I click on the "NYHETER" label
      Then I should be redirected to the news page

