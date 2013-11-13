class Provider < ActiveRecord::Base
  has_many :provided_pois
  has_many :pois, :through => :provided_pois

  mount_uploader :logo, LogoUploader
end
