class Provider < ActiveRecord::Base
  has_many :provided_pois
  has_many :pois, :through => :provided_pois
end
