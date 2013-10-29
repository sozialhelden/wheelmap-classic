Feature: Find, update and create nodes via API
  In order to show some nodes
  As a mobile device user
  I want to be able to request certain nodes

  Background:
    Given a provider "stiftung" exists with name: "Stiftung Gesundheit"
    And 1 valid pois exist
    And the following provided_pois exist
      | wheelchair | url                         | poi      | provider            |
      | yes        | http://www.arzt-auskunft.de | last poi | provider "stiftung" |

  Scenario: I want to see a decent title on the poi detail page
    When I am on the last poi's page
    Then I should see "Dieser Ort ist auf Wheelmap.org: name, Bar, Essen & Trinken, Berlin" within "title"

  Scenario: I want to see a link to a landing page on the poi detail page
    When I am on the last poi's page
    Then I should see "Alle Orte vom Typ"

  Scenario: I want to see a back link to the root page
    When I am on the last poi's page
    When I follow "zurück"
    Then I should be on the home page

  Scenario: I want to see a link to provider's detail page
    When I am on the last poi's page
    Then I should see "Stiftung Gesundheit"
    And I should see "Voll Rollstuhlgerecht"

  Scenario: I want to see a wheelchair description
    When I am on the last poi's page
    Then I should see "Yes, we have a ramp."
