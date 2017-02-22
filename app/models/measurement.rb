class Measurement < ActiveRecord::Base
  belongs_to :photo
  has_many :datapoints

  validates :data_type, presence: true
  validates :datapoints, presence: true
  validate :validate_datapoints
  validates_associated :datapoints

  def validate_datapoints
    case data_type
    when 'toilet'
      validate_toilet_points
    when 'door'
      validate_door_point
    when 'steps'
      validate_step_point
    when 'ramp'
      validate_ramp_point
    end
  end

  private

  def validate_door_point
    return if datapoints.empty?
    errors.add(:datapoints, 'door must have a width') if datapoints.first.property != 'width'
  end

  def validate_step_point
    return if datapoints.empty?
    errors.add(:datapoints, 'steps must have a height') if datapoints.first.property != 'height'
  end

  def validate_toilet_points
    errors.add(:datapoints, 'toilet metadata requires three datapoints') if datapoints.size != 3
  end

  def validate_ramp_point
    return if datapoints.empty?
    errors.add(:datapoints, 'ramp must have an angle') if datapoints.first.property != 'angle'
  end
end
