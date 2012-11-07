class Photo < ActiveRecord::Base
  belongs_to :poi
  mount_uploader :image, ImageUploader
end
