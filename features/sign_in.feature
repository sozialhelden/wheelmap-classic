Feature: Sign in

  Background:
    Given I am not authenticated
    And all email has been delivered
    And a user "horst" exists with email: "horst@wheelmap.org", password: "password", password_confirmation: "password", confirmed_at: "10.10.1999", oauth_token: "token", oauth_secret: "secret"

  Scenario: I want to be able to sign in
    Given I am on the home page
    When I follow "Login"
    Then I should be on the sign_in page
    And I should see "Login" within "legend"
    When I fill in "E-Mail" with "horst@wheelmap.org"
    And I fill in "Passwort" with "password"
    And I check "Eingeloggt bleiben?"
    And I press "Login"
    Then I should be on the home page
    And I should see "Login erfolgreich."

  Scenario: I want to be back on original page after signing in
   Given 1 valid pois exist
   And I am on that poi's page
   When I follow "Ort bearbeiten"
   Then I should be on the sign_in page
   When I fill in "E-Mail" with "horst@wheelmap.org"
   And I fill in "Passwort" with "password"
   And I press "Login"
   Then I am on that poi's edit page
   And I should see "horst@wheelmap.org"
