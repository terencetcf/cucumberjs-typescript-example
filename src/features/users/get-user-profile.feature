@contacts
Feature: Get user profile from GitHub

   Scenario: Retrieve user profile from GitHub
      Given I am a public user
       When I retrieve a user profile '<username>'
       Then I should the user profile '<username>'

      Examples:
      | username   |
      | terencetcf |