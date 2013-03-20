# TODO Reenable terms feature
Feature: User must accept terms
  In order to do some resticted action
  As a user
  I want to accept the terms

  Background:
    Given a provider "stiftung" exists with name: "Stiftung Gesundheit"
    And 1 valid pois exist

    And a user: "editor" exists with email: "editor@wheelmap.org", password: "123456", password_confirmation: "123456", confirmed_at: "10.10.1999", oauth_token: "oauth_token", oauth_secret: "oauth_secret", osm_id: "174", terms: "false", privacy_policy: "false"
    And user "editor" should be app_authorized
    And user "editor" should not be terms

  @omniauth_test
  Scenario: I must accept terms before uploading pictures
    And I am logged in with email: "editor@wheelmap.org", password: "123456"
    And I am on the last poi's page
    And I follow "Bild hochladen"
    Then I should be on the terms page

  @omniauth_test
  Scenario: I must accept terms before editing nodes
    And I am logged in with email: "editor@wheelmap.org", password: "123456"
    And I am on the last poi's page
    And I follow "Ort bearbeiten"
    Then I should be on the terms page
    And I check "Ich stimme den Nutzungsbedingungen zu."
    And I uncheck "Ich stimme Ziffer 1 und 2 der Datenschutzbestimmungen zu."
    And I press "Speichern"
    Then I should be on that user's terms page

  @omniauth_test
  Scenario: I must accept privacy before editing nodes
    And I am logged in with email: "editor@wheelmap.org", password: "123456"
    And I am on the last poi's page
    And I follow "Ort bearbeiten"
    Then I should be on the terms page
    And I uncheck "Ich stimme den Nutzungsbedingungen zu."
    And I check "Ich stimme Ziffer 1 und 2 der Datenschutzbestimmungen zu."
    And I press "Speichern"
    Then I should be on that user's terms page

  @omniauth_test
  Scenario: I must accept terms and privacy before editing nodes
    And I am logged in with email: "editor@wheelmap.org", password: "123456"
    And I am on the last poi's page
    And I follow "Ort bearbeiten"
    Then I should be on the terms page
    And I check "Ich stimme den Nutzungsbedingungen zu."
    And I check "Ich stimme Ziffer 1 und 2 der Datenschutzbestimmungen zu."
    And I press "Speichern"
    Then I should be on the last poi's edit page
