Feature: User feature
  In order to change my password
  As a registered user
  I want to visit my profile page

  Scenario: I want to log into my profile
    Given a user "horst" exists with email: "horst@wheelmap.org", password: "password", password_confirmation: "password"
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
  
  Scenario: I want to register as a new wheelmap user
    Given I am on the home page
    When I follow "Registrieren"
    Then I should be on the sign_up page
    And I should see "Registrieren" within "legend"
    When I fill in "E-Mail" with "horst@googlemail.com"
    And I fill in "Passwort" with "password"
    And I fill in "Passwort wiederholen" with "password"
    And I press "Registrieren"
    Then I should be on the last user's edit page
    And I should see "Deine Registrierung war erfolgreich."

  Scenario: I want to edit my profile
    Given I am logged in
    And I am on the last user's edit page
    Then I should see "E-Mail"
    And I should see "Passwort"
    And I should see "Passwort wiederholen"

  Scenario: I want to change my password
    Given I am logged in
    And I am on the last user's edit page
    When I fill in "E-Mail" with "loggedin@fg.hi"
    When I fill in "Passwort" with "new_password"
    And I fill in "Passwort wiederholen" with "new_password"
    And I press "Speichern"
    Then I should be on the last user's edit page
    And I should see "Dein Benutzerkonto wurde aktualisiert."
    
