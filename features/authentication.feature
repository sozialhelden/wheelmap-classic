Feature: Authenticate a user from mobile device
  In order check if mobile user credentials are valid
  As a mobile device user
  I want to prove that my user account exists on wheelmap.org
  
  Scenario: I want to login with valid credentials and with osm account
    Given a user: "horst" exists with email: "horst@wheelmap.org", password: "a_password", password_confirmation: "a_password", oauth_token: "a_token", oauth_secret: "a_secret"
    And the user: "horst" should be app authorized
    When I authenticate with email: "horst@wheelmap", password: "a_password"
    Then the response code should be "200"

  Scenario: I want to login with valid credentials and without osm account
    Given a user: "horst" exists with email: "horst@wheelmap.org", password: "a_password", password_confirmation: "a_password"
    And the user: "horst" should not be app authorized
    When I authenticate with email: "horst@wheelmap", password: "a_password"
    Then the response code should be "403"


  Scenario: I want to login with invalid credentials
    Given a user: "horst" exists with email: "horst@wheelmap.org", password: "a_password", password_confirmation: "a_password"
    When I authenticate with email: "horst@wheelmap", password: "wrong_password"
    Then the response code should be "400"
