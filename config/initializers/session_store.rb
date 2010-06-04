# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_wheelmap_session',
  :secret      => 'e7d8c7242ead21d933a7511ebb64d1b048d6a34b33786fbcee59e059096734b90858dd3e42865148ce895d1d21676aa22952badb04a5248e37c9fad63b0989ec'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
ActionController::Base.session_store = :active_record_store
