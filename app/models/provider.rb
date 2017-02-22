class Provider < ActiveRecord::Base
  has_many :provided_pois
  has_many :pois, through: :provided_pois
  has_and_belongs_to_many :users

  mount_uploader :logo, LogoUploader
end
