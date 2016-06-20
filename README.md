# Wheelmap.org

[![Build Status](https://travis-ci.org/sozialhelden/wheelmap.svg?branch=master)](https://travis-ci.org/sozialhelden/wheelmap)
[![Stories in Next](https://badge.waffle.io/sozialhelden/wheelmap.png?label=next&title=Next)](https://waffle.io/sozialhelden/wheelmap)

Wheelmap.org is an online map to search, find and mark wheelchair-accessible places. Get involved by marking public places like bars, restaurants, cinemas or supermarkets!

This Repository is the source code of the website [Wheelmap.org](http://wheelmap.org/).

## Installation

### Requirements

If you are working on a Mac, please install [Homebrew](http://brew.sh/).

Then install the following required tools:

#### `git`, `wget`

    brew install git wget

#### Latest Ruby 2.2.2 via rbenv

    brew install rbenv ruby-build
    rbenv install 2.2.2
    echo 'export PATH="/usr/local/bin:$PATH"' >> ~/.bash_profile
    echo 'eval "$(rbenv init -)"' >> ~/.bash_profile

Restart your shell and install bundler:

    rbenv global 2.2.2
    gem install bundler
    rbenv rehash

### Dependencies

#### MySQL

    brew install mysql
    mkdir -p ~/Library/LaunchAgents
    ln -sfv /usr/local/opt/mysql/*.plist ~/Library/LaunchAgents
    launchctl load ~/Library/LaunchAgents/homebrew.mxcl.mysql.plist

#### ImageMagick

    brew install imagemagick

#### PhantomJS

PhantomJS is a testing framework for headless testing.

To install on OSX

```
$ brew install phantomjs   # via Homebrew
# or
$ port install phantomjs   # via MacPorts
```

On Ubuntu 12.04, run:

```
$ sudo npm install -g phantomjs-prebuilt
```


### Clone the app from Github

    git clone https://github.com/sozialhelden/wheelmap.git --depth 1
    cd wheelmap
    bundle install --path vendor/bundle

## Getting started

1. Copy the example `secrets.yml`:

    ```
    cp config/secrets.sample.yml config/secrets.yml
    ```
    You need to fill in a secret for `secret_key_base` in `development`.
    Run `bundle exec rake secret` and fill in the generated secret.

2. Copy the example openstreetmap config:

    ```
    cp config/open_street_map.SAMPLE.yml config/open_street_map.yml
    ```

3. Copy the example environment variable config file:

    ```
    cp .env.sample .env
    ```

4. Copy the example database config and edit accordingly:

    ```
    cp config/database.SAMPLE.yml config/database.yml
    ```

5. Edit `database.yml` to reflect your current database settings.

6. Now lets create the actual database and prepare minimal data:

    ```
    bundle exec rake db:create:all
    ```

7. Then log into the mysql server and pipe the `structure.sql` file into the database you want to use, for example:

    ```
    mysql -u root wheelmap_development < db/structure.sql
    ```

8. Run the rake task to seed data:

    ```
    bundle exec rake db:seed
    ```

9. And get some POI data into the database:

    ```
    wget http://download.geofabrik.de/europe/germany/berlin-latest.osm.bz2
    bzcat berlin-latest.osm.bz2 | bundle exec rake osm:import
    ```

10. Install all node javascript dependencies:

    ```
    npm install
    ```

11. Finally startup a local rails server

    ```
    bundle exec rails server
    ```

And visit the website in your browser: `http://0.0.0.0:3000`

## Documentation

Please also check our [WIKI](https://github.com/sozialhelden/wheelmap/wiki), if you need more informations to specific topics and can't find them here, e.g. how to generate a sprite or how to test our app.

## Code of Conduct

We refer to the [Berlin Code of Conduct](http://berlincodeofconduct.org/) and friendly ask all contributors and people involved to comply with it.

## License

The Wheelmap Software is released under the [GNU Affero General Public License v3.0](/LICENSE).
