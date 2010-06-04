Feature: Oauth feature
  In order to make changes to the OSM db, we want to use oauth for authentication
  As a registered user
  I want change the wheelchair status of a node

  Scenario: I want to see authorization page as anonymous user
    Given I am not logged in
    And I am on the home page
    When I go to the oauth page
    Then I should be redirected to the sign_in page
    Then I should be on the sign_in page
    
  Scenario: I want to see authorization page as registered user
    Given I am logged in
    And I am on the home page
    When I go to the oauth page
    Then I should see "Link to your OpenStreetMap Account"
  
  Scenario: I want to be redirected to the authorization page for my osm account
    Given I am logged in
    And I am on the oauth page
    When I follow "Proceed"
    Then I should be redirected to the authorization page
    
  Scenario: I want to be redirected to the registration page for a new osm account
    Given I am logged in
    And I am on the oauth page
    When I follow "Register"
    Then I should be redirected to the registration page
    
  Scenario: I want to authorize wheelmap with my osm account
    Given I am logged in
    And I am on the oauth page
    When I follow "Proceed"
    And I follow "redirected"
    And I check "allow_write_api"
    And press "Save changes"
    And I fill in "username" with "sdsd"
    And I fill in "password" with "sdsd"
    And I press "Login"
    Then I should be redirected to the callback page
  