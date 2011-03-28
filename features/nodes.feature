Feature: Find, update and create nodes via API
  In order to show some nodes
  As a mobile device user
  I want to be able to request certain nodes
  
  Background:
    Given 20 pois exist
    
  Scenario: retreive all domains as XML
    And I send and accept JSON
    When I send a GET request for "/nodes?bbox=13.39,51.9,13.41,52.1"
    Then the response code should be "200"
    And the JSON response should be an array with 20 "ob" elements
    
  Scenario: I want to see a decent title on the poi detail page
    When I am on the last poi's page
    Then I should see "Ist name rollstuhlgerecht? Barrierefreie Orte in Berlin finden und melden auf wheelmap" within "title"