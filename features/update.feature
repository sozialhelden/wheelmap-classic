Feature: Find, update and create nodes via API
  In order to show some nodes
  As a mobile device user
  I want to be able to request certain nodes

  Background:
    Given there are no pois
    And a poi "horst" exists with osm_id: 345, region: nil
    And that poi has the following tags
      | foo | bar |

  @omniauth_test
  Scenario: I want to update an existing node
    Given a user: "editor" exists with email: "editor@wheelmap.org", password: "123456", password_confirmation: "123456", confirmed_at: "10.10.1999", oauth_token: "oauth_token", oauth_secret: "oauth_secret", osm_id: "174"
    And user "editor" should be app_authorized
    And I am logged in with email: "editor@wheelmap.org", password: "123456"
    And I am on that poi's page
    When I follow "Bearbeiten"
    When I fill in the following:
      | Straße   | Hühnerpfad           |
      | Nr       | 99                   |
      | PLZ      | 11122                |
      | Ort      | Wienerwald           |
      | Webseite | http://wienerwald.de |
      | Telefon  | 0800 wienerwald      |
    And I press "Speichern"
    And I am on that poi's page
    And an update tags job has been enqueued with element_id: 345, type: "node" and tags
      | addr:street      | Hühnerpfad           |
      | addr:housenumber | 99                   |
      | addr:city        | Wienerwald           |
      | addr:postcode    | 11122                |
      | website          | http://wienerwald.de |
      | phone            | 0800 wienerwald      |
      | foo              | bar                  |

