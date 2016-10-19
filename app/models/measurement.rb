class Measurement < ActiveRecord::Base
  belongs_to :photo
  has_many :datapoints

  validates :description, presence: true
  validates :measurement_type, presence: true
  validates :datapoints, presence: true
  validate :validate_datapoints
  validates_associated :datapoints

  def validate_datapoints
    if measurement_type == "toilet" && datapoints.size != 3
      errors.add(:datapoints, "toilet metadata requires three datapoints")
    end
  end
end
