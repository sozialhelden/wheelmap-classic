Feature: Oauth feature
  In order to make changes to the OSM db, we want to use oauth for authentication
  As a registered user
  I want change the wheelchair status of a node

  Background:
    Given a user "horst" exists with email: "horst@wheelmap.org", password: "password", password_confirmation: "password", confirmed_at: "10.10.1999"

  Scenario: I want to see authorization page as anonymous user
    Given I am not logged in
    And I am on the home page
    When I go to the oauth page
    Then I should be on the sign_in page

  Scenario: I want to see authorization page as registered user
    And I am logged in with email: "horst@wheelmap.org", password: "password"
    And I am on the home page
    When I go to the oauth page
    Then I should see "Link to your OpenStreetMap Account"

  Scenario: I want to be redirected to the authorization page for my osm account
    And I am logged in with email: "horst@wheelmap.org", password: "password"
    And I am on the oauth page
    Then I should see "Proceed"

  Scenario: I want to be redirected to the registration page for a new osm account
    And I am logged in with email: "horst@wheelmap.org", password: "password"
    And I am on the oauth page
    Then I should see "Register"

  Scenario: I want to authorize wheelmap with my osm account
    And I am logged in with email: "horst@wheelmap.org", password: "password"
    And I am on the oauth page
    Then I should see "Proceed"
