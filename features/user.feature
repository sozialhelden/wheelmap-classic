Feature: User feature
  In order to change my password
  As a registered user
  I want to visit my profile page
  
  Scenario: I want to edit my profile
    Given I am logged in
    When I go to the user's edit page
    Then I should see "Email"
    And I should see "Password"
    And I should see "Password confirmation"