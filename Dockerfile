FROM ruby:2.2

RUN curl -sL https://deb.nodesource.com/setup_4.x | bash - \
    && apt-get install -y nodejs \
    && apt-get autoremove -y

ENV WHEELMAP_DIR /opt/wheelmap

RUN mkdir -p $WHEELMAP_DIR
WORKDIR ${WHEELMAP_DIR}

ADD Gemfile Gemfile
ADD Gemfile.lock Gemfile.lock

RUN bundle install

ADD package.json package.json

RUN npm install

CMD bundle exec rails server

EXPOSE 3000