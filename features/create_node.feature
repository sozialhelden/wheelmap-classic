Feature: Create node feature
  In order to add new places to the platform
  As a osm and wheelmap user
  I want to fill all information in a form

  Scenario: I want to add a new place
    Given I am logged in
    And there are no CreateJobs
    And I am on the new node page
    When I fill in "node-name" with "Coyote ugly"
    And I select "Teilweise rollstuhlgerecht" from "node-wheelchair"
    And I select "Bar" from "node-type"
    And I fill in "node-lat" with "52.515890418816"
    And I fill in "node-lon" with "13.400021457672"
    And I press "node-submit"
    Then I should be on the home page
    And there should be 1 CreateJob
    
Scenario: I add a insufficient infos and want to see an error message
  Given I am logged in
  And I am on the new node page
  And I press "node-submit"
  Then I should be on the nodes page
  And I should see "muss ausgefüllt werden"
  