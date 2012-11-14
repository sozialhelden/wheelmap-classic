class Photo < ActiveRecord::Base
  attr_accessible :image
  belongs_to :poi
  belongs_to :user, :counter_cache => true
  mount_uploader :image, PhotoUploader

  before_save :extract_date_time

  protected

  def extract_date_time
    self.taken_at = EXIFR::JPEG.new(image.path).date_time rescue nil
  end

end
