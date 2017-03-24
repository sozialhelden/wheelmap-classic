#!/bin/sh

# Encourage phantomjs to work (https://github.com/ariya/phantomjs/issues/14376)
echo "export QT_QPA_PLATFORM=offscreen" >> ~/.profile

# Move into the appropriate folder
cd /vagrant || exit

# Shuffle around configuration files.
cp config/secrets.sample.yml config/secrets.yml
cp config/open_street_map.SAMPLE.yml config/open_street_map.yml
cp .env.sample .env
cp config/newrelic.SAMPLE.yml config/newrelic.yml
cp config/database.SAMPLE.yml config/database.yml

# Install dependencies
bundle install --path ~/bundle
npm install

# Seed everything
bundle exec rake db:create:all
mysql -u root wheelmap_development < db/structure.sql
mysql -u root wheelmap_test < db/structure.sql
bundle exec rake db:seed
curl -O http://download.geofabrik.de/europe/germany/berlin-latest.osm.bz2
bzcat berlin-latest.osm.bz2 | bundle exec rake osm:import
