Feature: Homepage feature

  Scenario: I want to see a decent title on the home page
    When I am on the home page
    Then I should see "Rollstuhlgerechte Orte finden" within ".logo"
