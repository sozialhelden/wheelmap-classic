class Datapoint < ActiveRecord::Base
  belongs_to :measurement
  validates :property, presence: true
  validates :unit, presence: true
  validates :value, presence: true
  validates :value, numericality: true

  def self.from_params(form_params)
    return new({}) if form_params.nil?
    property_name = form_params.keys.first
    params = {
      "property" => property_name,
      "value" => form_params[property_name],
      "unit" => unit(property_name)
    }
    new(params)
  end

  private

  def self.unit(property_name)
    case property_name
    when "angle"
      "degrees"
    when "area"
      "square meters"
    else
      "meters"
    end
  end
end
