Feature: User feature
  In order to change my password
  As a registered user
  I want to visit my user page

  Background:
    Given a user "horst" exists with email: "horst@wheelmap.org", password: "password", password_confirmation: "password", confirmed_at: "10.10.1999", osm_id: "174"
    And I am logged in with email: "horst@wheelmap.org", password: "password"

  @omniauth_test
  Scenario: I want to edit my user
    And I am on the last user's edit page
    Then I should see "E-Mail"
    And I should see "Vorname"
    And I should see "Nachname"
    And I should see "Passwort"
    And I should see "Passwort wiederholen"

  @omniauth_test @wip
  Scenario: I want to change my password
    And I am on the last user's edit page
    When I fill in "Passwort" with "new_password"
    And I fill in "Passwort wiederholen" with "new_password"
    And I press "Speichern"
    Then I should see "Benutzer wurde erfolgreich aktualisiert."
    And I should be on the last user's edit page

  @omniauth_test
  Scenario: I changed my email address
    When I am on the last user's edit page
    When I fill in "E-Mail" with "peter@wheelmap.org"
    And I press "Speichern"
    Then 1 email should be delivered to "peter@wheelmap.org"
    And I should see "Du bekommst in wenigen Minuten eine E-Mail mit einem Link"

  @omniauth_test
  Scenario: I set my email after signup
    When I am on the last user's after signup edit page
    When I fill in "E-Mail" with "peter@wheelmap.org"
    And I press "Fertigstellen"
    Then 1 email should be delivered to "peter@wheelmap.org"
    And I should see "Du bekommst in wenigen Minuten eine E-Mail mit einem Link"
