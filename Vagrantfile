# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/xenial64"

  # Expose a port so the application can be tested.
  config.vm.network "forwarded_port", guest: 3000, host: 3000

  # Required for NFS to work, pick any local IP
  config.vm.network :private_network, ip: '192.168.50.50'
  # Use NFS for shared folders for better performance
  config.vm.synced_folder '.', '/vagrant', nfs: true

  # Forwards the SSH agent so your keys work.
  config.ssh.forward_agent = true

  # Ensure the VM has enough power to do its job.
  config.vm.provider "virtualbox" do |vb|
    vb.memory = "2048"
    vb.cpus = 2
  end

  config.vm.provider "vmware_fusion" do |v|
   v.vmx["memsize"] = "2048"
   v.vmx["numvcpus"] = "2"
  end

  # Provision the necessary dependencies.
  config.vm.provision "shell", inline: <<-SHELL
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
      npm
    gem install bundler

    # Start MySQL?
    systemctl enable mysql
    systemctl start mysql
  SHELL

  config.vm.provision "shell", privileged: false, inline: <<-SHELL
    # Move into the appropriate folder
    cd /vagrant

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
    bundle exec rake db:seed
    curl -O http://download.geofabrik.de/europe/germany/berlin-latest.osm.bz2
    bzcat berlin-latest.osm.bz2 | bundle exec rake osm:import
  SHELL
end
