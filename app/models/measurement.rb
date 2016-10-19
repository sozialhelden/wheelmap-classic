class Measurement < ActiveRecord::Base
  belongs_to :photo
  has_many :datapoints

  validates :description, presence: true
  validates :measurement_type, presence: true
end
