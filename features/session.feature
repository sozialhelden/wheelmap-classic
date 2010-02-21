Feature
  In order to use the platform
  As a user
  I want to log in and log out

  Scenario: I want to log in
    Given an user with email "ab@cd.ef" and password "abcdef"
    And I am not logged in
    And I am on the login page
    When I fill in "E-Mail-Adresse" with "ab@cd.ef"
    And I fill in "Passwort" with "abcdef"
    And I press "Anmelden"
    Then I should see "Du bist jetzt drin!"
    And I should see "Angemeldet als: ab@cd.ef"
    And I should see "Abmelden"

  Scenario Outline: I try to log in with wrong data
    Given an user with email "ab@cd.ef" and password "abcdef"
    And I am not logged in
    And I am on the login page
    When I fill in "E-Mail-Adresse" with "<email>"
    And I fill in "Passwort" with "<password>"
    And I press "Anmelden"
    Then I should be on the login page
    Then I should see "E-Mail-Adresse und Password passen nicht zueinander."

    Examples:
      | email               | password  |
      |                     |           |
      | ab@cd.ef            |           |
      |                     | abcdef    |     
      | xxx@xxx.xx          | abcdef    |
      | ab@cd.ef            | xxxxxx    |
      | xxx@xxx.xx          | xxxxxx    |

  Scenario: I want to log out
    Given I am logged in
    And I am on the homepage
    Then I should see "Angemeldet als"
    When I follow "Abmelden"
    Then I should see "Tschüss und bis zum nächsten Mal!"
    And I should not see "Angemeldet als"

  Scenario: I want to activate my account
    Given a non activated user with email "ab@cd.ef" and password "abcdef"
    And I am not logged in
    And I am on the login page
    When I fill in "E-Mail-Adresse" with "ab@cd.ef"
    And I fill in "Passwort" with "abcdef"
    And I press "Anmelden"
    Then I should see "Dein Konto ist nun freigeschaltet!"
    And I should see "Angemeldet als: ab@cd.ef"
    And I should see "Abmelden"
