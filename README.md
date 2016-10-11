# Wheelmap.org

[![Build Status](https://travis-ci.org/sozialhelden/wheelmap.svg?branch=master)](https://travis-ci.org/sozialhelden/wheelmap)
[![Stories in Next](https://badge.waffle.io/sozialhelden/wheelmap.png?label=next&title=Next)](https://waffle.io/sozialhelden/wheelmap)

Wheelmap.org is an online map to search, find and mark wheelchair-accessible places. Get involved by marking public places like bars, restaurants, cinemas or supermarkets!

This Repository is the source code of the website [Wheelmap.org](http://wheelmap.org/).

## I. Installation

### Development Environment

A `Vagrantfile` is included for convenience. To use this just navigate into the Wheelmap directory and run `vagrant up`.

After it is completed you can enter the box with `vagrant ssh`. You'll find a current copy of the repository at `/vagrant`. Then you can start the server with `bundle exec rails server`, visit it at `localhost:3000`.

*Note:* Rails does not function well operating inside of the normal Virtualbox syncing scheme. Instead we use `rsync` which works well. You can use `vagrant rsync` to sync changes between your local and box copies.

### Requirements

- Ruby 2.2.2
- Bundler
- MySQL
- ImageMagick
- PhantomJS
- Node >= 4.1
- npm


Before you start, please make sure you have [Homebrew](http://brew.sh/) for Mac or [aptitude](http://packages.ubuntu.com/search?keywords=aptitude) for Ubuntu installed.

#### Install essential software packages:

MacOS

```
$ brew install git wget
```

Ubuntu

```
$ sudo apt-get update
$ sudo apt-get install -y git wget curl zlib1g-dev build-essential libssl-dev libreadline-dev libyaml-dev libxml2-dev libxslt1-dev libcurl4-openssl-dev python-software-properties libffi-dev
```

#### Install Ruby 2.2.2:

MacOS / Ubuntu

First, install the Ruby Package Manager of your choice:

- [rbenv](https://github.com/rbenv/rbenv)
- [rvm](https://rvm.io/rvm/install)

Dependent on your choice, please install Ruby with either:

```
$ rbenv install 2.2.2
$ rbenv rehash
$ rbenv local 2.2.2
```

or:

```
$ rvm install 2.2.2
$ rvm use 2.2.2
```

Note: If you need more infos about how to install rbenv, rvm or Ruby, please take a look at our [wiki page](https://github.com/sozialhelden/wheelmap/wiki/Install-rbenv,-rvm-&-ruby).


#### Install Bundler:

MacOS / Ubuntu

```
$ gem install bundler
```

#### Install MySQL:

MacOS

```
$ brew install mysql
```

Ubuntu

```
$ sudo apt-get update
$ sudo apt-get install -y libmysqlclient-dev mysql-server
```

#### Install ImageMagick:

MacOS

```
$ brew install imagemagick
```

Ubuntu
```
$ sudo apt-get install -y imagemagick
```

#### Install PhantomJS:

PhantomJS is a testing framework for headless testing.

MacOS

```
$ brew install phantomjs   # via Homebrew

or:
$ port install phantomjs   # via MacPorts
```

Ubuntu

```
$ sudo npm install -g phantomjs-prebuilt
```

#### Clone the app from Github:

```
$ git clone https://github.com/sozialhelden/wheelmap.git --depth 1
$ cd wheelmap
$ bundle install --path vendor/bundle
```

## II. Getting started

##### Copy the example `secrets.yml`:

```
$ cp config/secrets.sample.yml config/secrets.yml
```

##### Copy the example openstreetmap config:

```
$ cp config/open_street_map.SAMPLE.yml config/open_street_map.yml
```

##### Copy the example environment variable config file:

```
$ cp .env.sample .env
```

##### Copy the example database config and edit accordingly:

```
$ cp config/database.SAMPLE.yml config/database.yml
```

##### Edit `database.yml` to reflect your current database settings.

##### Now lets create the actual database and prepare minimal data:

```
$ bundle exec rake db:create:all
```

##### Then log into the mysql server and pipe the `structure.sql` file into the database you want to use, for example:

```
$ mysql -u root wheelmap_development < db/structure.sql
```

##### Run the rake task to seed data:

```
$ bundle exec rake db:seed
```

##### And get some POI data into the database:

```
$ wget http://download.geofabrik.de/europe/germany/berlin-latest.osm.bz2
$ bzcat berlin-latest.osm.bz2 | bundle exec rake osm:import
```

##### Install all JavaScript dependencies:

MacOS

```
$ brew install node
$ npm install -g npm
$ npm install
```

Ubuntu

```
$ sudo apt-get install -y nodejs
$ sudo apt-get install -y npm
$ sudo npm install -g npm
```

##### Finally startup a local rails server

```
$ bundle exec rails server
```

And visit the website in your browser: `http://0.0.0.0:3000`

## III. Documentation

Please also check our [wiki](https://github.com/sozialhelden/wheelmap/wiki), if you need more informations to specific topics and can't find them here, e.g. how to generate a sprite or how to test our app.


## IV. Code of Conduct

We refer to the [Berlin Code of Conduct](http://berlincodeofconduct.org/) and friendly ask all contributors and people involved to comply with it.

## V. License

The Wheelmap Software is released under the [GNU Affero General Public License v3.0](/LICENSE).
