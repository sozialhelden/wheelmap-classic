#!/bin/bash

set -e

DEPLOY_TO=/var/apps/wheelmap/production

export RAILS_ENV=production
export PATH=/opt/rbenv/shims:/opt/rbenv/bin:/opt/rbenv/bin/rbenv:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:$PATH

COMMAND="bundle exec rake osm:replication:sync"

/bin/bash -l -c "cd $DEPLOY_TO/current && $COMMAND --silent >> $DEPLOY_TO/shared/log/cron.log 2>&1"
