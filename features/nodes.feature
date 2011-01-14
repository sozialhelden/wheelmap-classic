Feature: Find, update and create nodes via API
  In order to show some nodes
  As a mobile device user
  I want to be able to request certain nodes
    
  Scenario: retreive all domains as XML
    Given 20 pois exist
    And I send and accept JSON
    When I send a GET request for "/nodes?bbox=13.39,51.9,13.41,52.1"
    Then the response code should be "200"
    And the JSON response should be an array with 20 "ob" elements