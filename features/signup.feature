Feature: Signup feature
  In order to edit and create new pois
  As an anonymous user
  I want to signup for a wheelmap account

  Background:
    Given there are no users

  @omniauth_test
  Scenario: I want to signup
    When I am on the home page
    And I follow "Login"
    And I follow "Einloggen mit OpenstreetMap"
    And I go to the callback page
    Then a user should exist

  @omniauth_test
  Scenario: I want to signup too
    When I sign up
    Then a user should exist

  @omniauth_test
  Scenario: I want to signup and register my email
    When I sign up
    Then a user should exist
    When I go to the after sign_up page
    And I fill in "E-Mail" with "alana.engel.s@gmail.com"
    And I press "Fertigstellen"
    Then I should be on the home page
    And a user should exist with email: "alana.engel.s@gmail.com"