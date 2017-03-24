#!/usr/bin/ruby

# Simple OSM Auth example showing GET PUT and DELETE methods
# Requires OAuth rubygem

require 'rubygems'
require 'oauth'
require 'date'
require 'yaml'

# Format of auth.yml:
# consumer_key: (from osm.org)
# consumer_secret: (from osm.org)
# token: (use oauth setup flow to get this)
# token_secret: (use oauth setup flow to get this)
auth = YAML.safe_load(File.open('auth.yaml'))

# The consumer key and consumer secret are the identifiers for this particular application, and are
# issued when the application is registered with the site. Use your own.
@consumer = OAuth::Consumer.new auth['consumer_key'],
                                auth['consumer_secret'],
                                site: 'http://api06.dev.openstreetmap.org'

# Create the access_token for all traffic
@access_token = OAuth::AccessToken.new(@consumer, auth['token'], auth['token_secret'])

# Use the access token for various commands. Although these take plain strings, other API methods
# will take XML documents.
@access_token.put('/api/0.6/user/preferences/demo_last_run_time', DateTime.now.to_s, 'Content-Type' => 'text/plain')
@access_token.put('/api/0.6/user/preferences/deleteme', "This shouldn't be seen", 'Content-Type' => 'text/plain')
@access_token.delete('/api/0.6/user/preferences/deleteme')
puts @access_token.get('/api/0.6/user/preferences').body
