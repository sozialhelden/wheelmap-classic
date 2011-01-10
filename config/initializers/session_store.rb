# Be sure to restart your server when you modify this file.

Wheelmap::Application.config.session_store :cookie_store, :key => '_wheelmap_session', :secret      => 'e7d8c7242ead21d933a7511ebb64d1b048d6a34b33786fbcee59e059096734b90858dd3e42865148ce895d1d21676aa22952badb04a5248e37c9fad63b0989ec'

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rails generate session_migration")
Wheelmap::Application.config.session_store :active_record_store
