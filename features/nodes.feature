Feature: Find, update and create nodes via API
  In order to show some nodes
  As a mobile device user
  I want to be able to request certain nodes

  Background:
    Given 20 valid pois exist

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

  Scenario: I want to see a back link to the root page
    When I am on the last poi's page
    Then I should see "zurück"
    When I follow "zurück"
    Then I should be on the root page

  @wip
  Scenario: I want to see a link - i work here
    When I am on the last poi's page
    Then I should see "Du arbeitest hier?"
    When I follow "Du arbeitest hier?"
    Then I should be on the last poi's claim page

  Scenario: I want to create a new node
    Given a user: "creator" exists with email: "creator@wheelmap.org", password: "123456", password_confirmation: "123456", confirmed_at: "10.10.1999", oauth_token: "oauth_token", oauth_secret: "oauth_secret", oauth_request_token: "oauth_request_token"
    And user "creator" should be app_authorized
    And I am logged in with email: "creator@wheelmap.org", password: "123456"
    And I am on the home page
    When I follow "Ort hinzufügen"
    Then I should be on the new node page
    When I fill in "Name" with "Hotel Recklinghausen"
    And I select "Voll Rollstuhlgerecht" from "Rollstuhlgerecht?"
    And I select "Bar" from "node-type"
    And I fill in "Längengrad" with "54.1"
    And I fill in "Breitengrad" with "13.9"
    And I press "Ort anlegen"
    Then I should be on the home page
    And I should see "Vielen Dank, der Eintrag wurde gespeichert und wird demnächst aktualisiert"
    And I should see "/nodes/created"
