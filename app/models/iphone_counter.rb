class IphoneCounter < ActiveRecord::Base

  validates :install_id, :uniqueness => true

  def self.unique_installs
    select('DISTINCT install_id').count
  end

  def self.device_versions
    versions = select('*, COUNT(id) AS counter').group('device_version')
    versions.inject({}) do |memo, v|
      memo["device_version_#{v.device_version}"] = v.counter unless v.device_version.blank?
      memo
    end
  end

  def self.os_versions
    versions = select('*, COUNT(id) AS counter').group('os_version')
    versions.inject({}) do |memo, v|
      memo["os_version_#{v.os_version}"] = v.counter unless v.os_version.blank?
      memo
    end
  end

  def self.app_versions
    versions = select('*, COUNT(id) AS counter').group('app_version')
    versions.inject({}) do |memo, v|
      memo["app_version_#{v.app_version}"] = v.counter unless v.app_version.blank?
      memo
    end
  end
end
