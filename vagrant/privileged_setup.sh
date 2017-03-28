#!/bin/sh

update-locale LC_ALL=en_US.utf8

# Get add-apt-repository
apt-get update
apt-get install -y software-properties-common

# We need MySQL 5.6 right now, but since it's not in Xenial package repositories, we need to have this one here in place
add-apt-repository 'deb http://archive.ubuntu.com/ubuntu trusty universe'

# Update apt once again so it learns about this new repo.
apt-get update

# Preconfigure mysql.
export DEBIAN_FRONTEND=noninteractive #Prevents mysql installer to show set password dialogue

# Install all dependencies
apt-get install -y \
  git \
  imagemagick \
  mysql-server-5.6 \
  python-software-properties \
  curl \
  build-essential \
  libmysqlclient-dev \
  libxslt-dev \
  libxml2-dev \
  zlib1g-dev \
  libmagick++-dev \
  libpq-dev \
  vim \
  ruby \
  ruby-dev \
  nodejs-legacy \
  npm \
  phantomjs

gem install bundler

# Start MySQL?
systemctl enable mysql
systemctl start mysql
