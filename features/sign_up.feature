Feature: Sign up
  Scenario: Creating a new account
      Given I am not authenticated
      When I go to the sign-up page # define this path mapping in features/support/paths.rb, usually as '/users/sign_up'
      And I fill in "user_email" with "cucumber@mailinator.com"
      And I fill in "user_password" with "password"
      And I fill in "user_password_confirmation" with "password"
      And I press "user_submit"
      Then I should see "Deine Registrierung war erfolgreich."
      And I should see "Dein Profil bearbeiten"

