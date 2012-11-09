class Photo < ActiveRecord::Base
  attr_accessible :image
  belongs_to :poi
  belongs_to :user
  mount_uploader :image, PhotoUploader
  process_in_background :image

  before_save :extract_date_time

  protected

  def extract_date_time
    self.taken_at = EXIFR::JPEG.new(image.path).date_time rescue nil
  end

end
