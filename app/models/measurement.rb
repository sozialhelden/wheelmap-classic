class Measurement < ActiveRecord::Base
  belongs_to :photo
  has_many :datapoints
  accepts_nested_attributes_for :datapoints
end
