FROM ruby:2.2

ENV WHEELMAP_DIR /opt/wheelmap

# Install npm dependencies
RUN apt-get update
RUN apt-get install -y nodejs npm mysql-client

RUN mkdir -p $WHEELMAP_DIR
WORKDIR ${WHEELMAP_DIR}

# Copy install files
COPY . .

# Install bundle
RUN bundle install

# Copy important files for first setup
ADD config config
ADD .env.sample .env.sample

# Copy configuration samples
RUN cp $WHEELMAP_DIR/config/secrets.sample.yml $WHEELMAP_DIR/config/secrets.yml
RUN cp $WHEELMAP_DIR/config/open_street_map.SAMPLE.yml $WHEELMAP_DIR/config/open_street_map.yml
RUN cp $WHEELMAP_DIR/.env.sample $WHEELMAP_DIR/.env
RUN cp $WHEELMAP_DIR/config/database.SAMPLE.yml $WHEELMAP_DIR/config/database.yml

# Initialize database
RUN bundle exec rake db:create
RUN mysql -u root wheelmap_development < db/structure.sql
RUN bundle exec rake db:seed

# Import data from OSM for development
ADD http://download.geofabrik.de/europe/germany/berlin-latest.osm.bz2 ${WHEELMAP_DIR}
RUN bzcat $WHEELMAP_DIR/berlin-latest.osm.bz2 | bundle exec rake osm:import
RUN rm $WHEELMAP_DIR/berlin-latest.osm.bz2

RUN npm install

CMD bundle exec rails server

EXPOSE 3000