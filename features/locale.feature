Feature: Locale feature
  In order to use wheelmap
  As a anonymous user with different languages
  I want to switch the language

  Background:
    Given the following languages are supported "de;en;es;fr;it;is"

  Scenario: I want to see wheelmap in my preferred language
    Given my browser supports the following languages "de-DE;de;en"
    When I go to the home page
    Then my locale should be "de"

  # Scenario: I want to see wheelmap in my preferred non german language
  #   Given my browser supports the following languages "es;en"
  #   When I go to the home page
  #   Then my locale should be "es"

  Scenario: Fallback to default language when supported languages are not available
    Given my browser supports the following languages "be;pt"
    When I go to the home page
    Then my locale should be "de"

  Scenario: I want to switch manually to the german hompage
    When I go to the german home page
    Then my locale should be "de"
    Then I should be on the home page

  Scenario: I want to switch manually to the spanish hompage
    When I go to the spanish home page
    Then my locale should be "es"

  Scenario: I want to switch manually to the english hompage
    When I go to the english home page
    Then my locale should be "en"