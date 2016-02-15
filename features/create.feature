Feature: Create a new node via website
  In order to get new data for wheelmap
  As a registered user
  I want to be able to create a new poi

  Background:
    Given a node type exists with osm_key: "amenity", osm_value: "bar", identifier: "bar"

  @omniauth_test
  Scenario: I want to create a new node
    Given a user: "creator" exists with email: "creator@wheelmap.org", password: "123456", password_confirmation: "123456", confirmed_at: "10.10.1999", oauth_token: "oauth_token", oauth_secret: "oauth_secret", osm_id: "174"
    And user "creator" should be app_authorized
    And I am logged in with email: "creator@wheelmap.org", password: "123456"
    And I am on the home page
    When I follow "Ort hinzufügen"
    Then I should be on the new node page
    When I fill in the following:
      | Name                     | Hotel Recklinghausen            |
      | Info zu Barrierefreiheit | Klingeln und nach Rampe fragen. |
      | Breitengrad              | 54.1                            |
      | Längengrad               | 13.9                            |
      | Straße                   | Hühnerpfad                      |
      | Nr                       | 99                              |
      | PLZ                      | 11122                           |
      | Ort                      | Wienerwald                      |
      | Webseite                 | http://wienerwald.de            |
      | Telefon                  | +49 800 123344                  |

    And I select "Voll Rollstuhlgerecht" from "Rollstuhlgerecht?"
    And I select "Bar" from "Typ"
    And I press "Ort anlegen"
    Then I should be on the home page

    And a create node job has been enqueued with lat: 54.1, lon: 13.9 and tags
      | name                   | Hotel Recklinghausen            |
      | amenity                | bar                             |
      | wheelchair             | yes                             |
      | wheelchair:description | Klingeln und nach Rampe fragen. |
      | addr:street            | Hühnerpfad                      |
      | addr:housenumber       | 99                              |
      | addr:city              | Wienerwald                      |
      | addr:postcode          | 11122                           |
      | website                | http://wienerwald.de            |
      | phone                  | +49 800 123344                  |
