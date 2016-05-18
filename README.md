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

On Ubuntu 12.04, see either [this description](https://mediocre.com/forum/topics/phantomjs-2-and-travis-ci-we-beat-our-heads-against-a-wall-so-you-dont-have-to) or run:

```
$ sudo apt-get install phantomjs lbwebp2 libicu48 libjpeg8 libfontconfig
```


### Clone the app from Github

    git clone https://github.com/sozialhelden/wheelmap.git --depth 1
    cd wheelmap
    bundle install --path vendor/bundle

## Getting started

Copy the example application config:

    cp config/application.yml.sample config/application.yml

Copy the example openstreetmap config:

    cp config/open_street_map.SAMPLE.yml config/open_street_map.yml

Copy the example database config and edit accordingly:

    cp config/database.SAMPLE.yml config/database.yml

Edit `database.yml` to reflect your current database settings.

Now lets create the actual database and prepare minimal data:

    bundle exec rake db:create:all db:migrate db:seed

And get some POI data into the database:

    wget http://download.geofabrik.de/europe/germany/berlin-latest.osm.bz2
    bzcat berlin-latest.osm.bz2 | bundle exec rake osm:import

Install all node javascript dependencies:

    npm install

Finally startup a local rails server

    bundle exec rails server

And visit the website in your browser: http://0.0.0.0:3000

## Documentation

Please also check our [WIKI](https://github.com/sozialhelden/wheelmap/wiki), if you need more informations to specific topics and can't find them here, e.g. how to generate a sprite or how to test our app. 

## License

The Wheelmap Software is released under the [GNU Affero General Public License v3.0](/LICENSE).
