class IphoneCounter < ActiveRecord::Base

  validates :install_id, :uniqueness => true

  before_save :remove_whitespace

  def self.outdated
    self.where(["created_at < ?", 30.days.ago])
  end

  def self.unique_installs
    select('DISTINCT install_id').count
  end

  def self.device_versions
    versions = select('*, COUNT(id) AS counter').group('device_version')
    versions.inject({}) do |memo, v|
      memo[v.device_version] = v.counter unless v.device_version.blank?
      memo
    end
  end

  def self.os_versions
    versions = select('*, COUNT(id) AS counter').group('os_version')
    versions.inject({}) do |memo, v|
      memo[v.os_version] = v.counter unless v.os_version.blank?
      memo
    end
  end

  def self.app_versions
    versions = select('*, COUNT(id) AS counter').group('app_version')
    versions.inject({}) do |memo, v|
      memo[v.app_version] = v.counter unless v.app_version.blank?
      memo
    end
  end

  def self.normalize_key(key)
    key.gsub(/[\s\-\.\,\;]+/, '_')
  end

  def remove_whitespace
    app_version    =  app_version.strip    unless app_version.blank?
    device_version =  device_version.srip  unless device_version.blank?
    install_id     =  install_id.strip     unless install_id.blank?
    os_version     =  os_version.strip     unless os_version.blank?
  end
end
