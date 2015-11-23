Feature: User feature
  In order to change my password
  As a registered user
  I want to visit my profile page

  Background:
    Given a user "horst" exists with email: "horst@wheelmap.org", password: "password", password_confirmation: "password", confirmed_at: "10.10.1999", osm_id: "174"
    And I am logged in with email: "horst@wheelmap.org", password: "password"

  @omniauth_test
  Scenario: I want to edit my profile
    And I am on the last user's edit page
    Then I should see "E-Mail"
    And I should see "Vorname"
    And I should see "Nachname"
    And I should see "Passwort"
    And I should see "Passwort wiederholen"

  @omniauth_test
  Scenario: I want to change my password
    And I am on the last user's edit page
    When I fill in "Passwort" with "new_password"
    And I fill in "Passwort wiederholen" with "new_password"
    And I press "Speichern"
    And PENDING: make cached flash testable
    Then I should see "Benutzer wurde erfolgreich aktualisiert."
    And I should be on the last user's edit page

  @omniauth_test
  Scenario: I changed my email address
    When I am on the last user's edit page
    When I fill in "E-Mail" with "peter@wheelmap.org"
    And I press "Speichern"
    Then 1 email should be delivered to "peter@wheelmap.org"
    And PENDING: make cached flash testable
    And I should see "Du bekommst in wenigen Minuten eine E-Mail mit einem Link"

  @omniauth_test
  Scenario: I set my email after signup with existing password
    When I am on the profile after signup edit page
    When I fill in "E-Mail" with "peter@wheelmap.org"
    And I press "Fertigstellen"
    Then 1 email should be delivered to "peter@wheelmap.org"


  @omniauth_test
  Scenario: I set my password after signup
    Given there are no users
    And a user "horst2" exists with email: "horst2@wheelmap.org", password: "", password_confirmation: "", confirmed_at: "10.10.1999", osm_id: "174"
    And I am logged in with email: "horst@wheelmap.org", password: ""

    When I am on the profile after signup edit page
    When I fill in "E-Mail" with ""
    And I press "Fertigstellen"
    And PENDING: make cached flash testable
    And I should see "Email muss ausgefüllt werden"


  @omniauth_test
  Scenario: I set my email after signup without any prior password
    Given I am not logged in
    When I am on the new user password page
    When I fill in "E-Mail" with "horst@wheelmap.org"
    And I press "Passwort neu setzen"
    And PENDING: make cached flash testable
    And I should see "Du bekommst in wenigen Minuten eine E-Mail mit Informationen wie du dein Passwort neu setzen kannst."

  @omniauth_test
  Scenario: I set my email after signup without any prior email and get an welcome email
  Given there are no users
  And a user "horst" exists with email: "", confirmed_at: "10.10.1999", osm_id: "174"
  And I am logged in
  When I am on the profile after signup edit page
  And I fill in "E-Mail" with "peter@wheelmap.org"
  And I press "Fertigstellen"
  Then 2 email should be delivered to "peter@wheelmap.org"

