Feature: Find, update and create nodes via API
  In order to show some nodes
  As a mobile device user
  I want to be able to request certain nodes

  Background:
    Given 20 pois exist

  Scenario: retrieve all nodes as JSON
    And I send and accept JSON
    When I send a GET request for "/nodes?bbox=13.39,51.9,13.41,52.1"
    Then the response code should be "200"

  Scenario: I want to see a decent title on the poi detail page
    When I am on the last poi's page
    Then I should see "Ort: name | wheelmap.org" within "title"

  Scenario: I want to see a link to a landing page on the poi detail page
    When I am on the last poi's page
    Then I should see "Alle Orte vom Typ"