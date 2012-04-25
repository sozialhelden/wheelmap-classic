Feature: Find, update and create nodes via API
  In order to show some nodes
  As a mobile device user
  I want to be able to request certain nodes

  Background:
    Given 5 valid pois exist

  Scenario: I want to see a decent title on the poi detail page
    When I am on the last poi's page
    Then I should see "Ort: name | wheelmap.org" within "title"

  Scenario: I want to see a link to a landing page on the poi detail page
    When I am on the last poi's page
    Then I should see "Alle Orte vom Typ"

  Scenario: I want to see a back link to the root page
    When I am on the last poi's page
    Then I should see "zurück"
    When I follow "zurück"
    Then I should be on the root page

  Scenario: I want to see a link - i work here
    When I am on the last poi's page
    Then I should see "Du arbeitest hier?"
    When I follow "Du arbeitest hier?"
    Then I should be on the last poi's claim page

