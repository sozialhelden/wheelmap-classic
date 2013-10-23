Feature: Search
  In order find relevant data
  As a web user
  I want to be able to do a search

  Background:
    Given a search for "Herborn" delivers the following results
       | place_id  | licence                                                                        | osm_type | osm_id  | boundingbox                                                       | lat              | lon             | display_name                                                 | class    | type           | icon                                                                                          |
       | 116998025 | Data Copyright OpenStreetMap Contributors, Some Rights Reserved. CC-BY-SA 2.0. | relation | 1245136 | [49.6095492813, 49.9295492813, 7.12593639533, 7.44593639533] | 49.7695492812658 | 7.2859363953348 | Herborn, Herrstein, Birkenfeld, Rheinland-Pfalz, Deutschland | boundary | administrative | http://open.mapquestapi.com/nominatim/v1/images/mapicons/poi_boundary_administrative.p.20.png |

  Scenario: simple search
    Given I am on the home page
    And PENDING: search field is rendered with ember.js
    And I search for "Herborn"
    Then I should be on the search result page
