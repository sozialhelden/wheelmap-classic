Tolk::Locale.primary_locale_name = 'en'
Tolk::ApplicationController.authenticator = proc {
  authenticate_admin!
}