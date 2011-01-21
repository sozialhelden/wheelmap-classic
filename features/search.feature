Feature: Search
  In order find relevant data
  As a web user
  I want to be able to do a search

  Background:
    Given a search result exists for the query "Herborn"

  Scenario: simple search
    Given I am on the home page
    And I search for "Herborn"
    Then I should be on the search result page
