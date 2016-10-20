class Measurement < ActiveRecord::Base
  belongs_to :photo
  has_many :datapoints

  validates :description, presence: true
  validates :measurement_type, presence: true
  validates :datapoints, presence: true
  validate :validate_datapoints
  validates_associated :datapoints

  def validate_datapoints
    case measurement_type
    when 'toilet'
      validate_toilet_points
    when 'door'
      validate_door_point
    when 'steps'
      validate_step_point
    end
  end

  private

  def validate_door_point
    return if datapoints.size == 0
    errors.add(:datapoints, "door must have a width") if datapoints.first.property != 'width'
  end

  def validate_step_point
    return if datapoints.size == 0
    errors.add(:datapoints, "steps must have a height") if datapoints.first.property != 'height'
  end

  def validate_toilet_points
    errors.add(:datapoints, "toilet metadata requires three datapoints") if datapoints.size != 3
  end
end
