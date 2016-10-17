class Measurement < ActiveRecord::Base
  belongs_to :photo
  has_many :datapoints
end
