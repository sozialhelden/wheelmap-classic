Feature: User feature
  In order to change my password
  As a registered user
  I want to visit my profile page

  Scenario: I want to register as a new wheelmap user
    Given I am on the home page
    When I follow "Registrieren"
    Then I should be on the sign_up page
    And I should see "Registrieren" within "legend"
    When I fill in "E-Mail" with "horst@googlemail.com"
    And I fill in "Passwort" with "password"
    And I fill in "Passwort wiederholen" with "password"
    And I press "Registrieren"
    Then I should be on the registration successfull page
    And I should see "Noch einen Schritt zur Aktivierung deines Benutzerkontos"

  Scenario: I want to edit my profile
    Given a user "horst" exists with email: "horst@wheelmap.org", password: "password", password_confirmation: "password", confirmed_at: "10.10.1999"
    And I am logged in with email: "horst@wheelmap.org", password: "password"
    And I am on the last user's edit page
    Then I should see "E-Mail"
    And I should see "Passwort"
    And I should see "Passwort wiederholen"

  Scenario: I want to change my password
    Given a user "horst" exists with email: "horst@wheelmap.org", password: "password", password_confirmation: "password", confirmed_at: "10.10.1999"
    And I am logged in with email: "horst@wheelmap.org", password: "password"
    And I am on the last user's edit page
    When I fill in "E-Mail" with "horst@wheelmap.org"
    When I fill in "Passwort" with "new_password"
    And I fill in "Passwort wiederholen" with "new_password"
    And I press "Speichern"
    Then I should be on the last user's edit page
    And I should see "Dein Benutzerkonto wurde aktualisiert."

