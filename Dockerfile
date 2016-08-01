FROM ruby:2.2-alpine

ENV WHEELMAP_DIR /opt/wheelmap

RUN mkdir -p $WHEELMAP_DIR
WORKDIR ${WHEELMAP_DIR}

# Install bundle
RUN apk add --no-cache --update --virtual .bundle-install-deps \
        git \
        nodejs \
        build-base \
        mysql-dev \
        libxml2-dev \
        libxslt-dev \
        imagemagick-dev \
        linux-headers

ADD Gemfile Gemfile
ADD Gemfile.lock Gemfile.lock
ADD package.json package.json

RUN bundle config build.nokogiri --use-system-libraries
RUN bundle install
RUN npm install

RUN apk del .bundle-install-deps

RUN apk add --no-cache --update \
        libxml2-dev \
        libxslt-dev \
        nodejs \
        imagemagick-dev \
        mysql-dev

CMD bundle exec rails server

EXPOSE 3000