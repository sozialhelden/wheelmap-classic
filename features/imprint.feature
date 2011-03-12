Feature: Imprint feature
  In order to see who is responsible for this site
  As a anonymous user
  I want to visit the imprint page
  
  Scenario: I want to see the imprint
    Given I am on the home page
    When I follow "Impressum"
    Then I should be on the imprint page
    And I should see "Impressum" within "h1"
