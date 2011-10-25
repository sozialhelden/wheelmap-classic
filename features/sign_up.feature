Feature: Sign up

  Background:
    Given I am not authenticated
    Given all email has been delivered

  Scenario: Creating a new account
    When I go to the sign_up page
    And I fill in "E-Mail" with "cucumber@mailinator.com"
    And I fill in "Passwort" with "password"
    And I fill in "Passwort wiederholen" with "password"
    And I press "Registrieren"
    Then I should see "Noch einen Schritt zur Aktivierung deines Benutzerkontos"
    And I should see "Bitte klicke auf den Link"
    And 1 email should be delivered to "cucumber@mailinator.com"
    And the email should contain "Mein Benutzerkonto bestätigen"
    When I follow "Mein Benutzerkonto bestätigen" in the email
    Then I should see "Dein Benutzerkonto wurde erfolgreich bestätigt. Du bist nun angemeldet"
    And I should see "/registrations/confirmed"


