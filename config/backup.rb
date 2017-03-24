# encoding: utf-8

##
# Backup Generated: my_backup
# Once configured, you can run the backup with the following command:
#
# $ backup perform -t my_backup [-c <path_to_configuration_file>]

database_yml = File.expand_path('../database.yml', __FILE__)
RAILS_ENV    = ENV['RAILS_ENV'] || 'development'

require 'yaml'
config = YAML.load_file(database_yml)

Backup::Model.new(:my_backup, 'Database backup of wheelmap.org') do
  database MySQL do |db|
    db.name               = config[RAILS_ENV]['database']
    db.username           = config[RAILS_ENV]['username']
    db.password           = config[RAILS_ENV]['password']
    db.host               = config[RAILS_ENV]['host']
    db.port               = config[RAILS_ENV]['port']
    db.skip_tables        = ['pois']
  end

  ##
  # Split [Splitter]
  #
  # Split the backup file in to chunks of 250 megabytes
  # if the backup file size exceeds 250 megabytes
  #
  # split_into_chunks_of 250

  ##
  # Local (Copy) [Storage]
  #
  store_with Local do |local|
    local.path       = 'tmp/var/backups/'
    local.keep       = 5
  end

  ##
  # Bzip2 [Compressor]
  #
  compress_with Bzip2 do |compression|
    compression.level = 9
  end

  ##
  # Mail [Notifier]
  #
  # The default delivery method for Mail Notifiers is 'SMTP'.
  # See the Wiki for other delivery options.
  # https://github.com/meskyanichi/backup/wiki/Notifiers
  #
  # notify_by Mail do |mail|
  #   mail.on_success           = true
  #   mail.on_warning           = true
  #   mail.on_failure           = true
  #
  #   mail.from                 = ''
  #   mail.to                   = ''
  #   mail.address              = ''
  #   mail.port                 = 25
  #   mail.domain               = ''
  #   mail.user_name            = ''
  #   mail.password             = ''
  #   mail.authentication       = "plain"
  #   mail.encryption           = :starttls
  # end
end
