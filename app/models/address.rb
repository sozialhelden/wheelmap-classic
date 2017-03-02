# encoding: UTF-8

class Address < ActiveRecord::Base
  attr_accessible :latitude, :longitude, :name, :street, :zip, :city

  geocoded_by :address

  after_validation :geocode

  def address
    "#{street}, #{zip} #{city}"
  end

  def self.import(csv_file)
    CSV.parse(csv_file, headers: true, encoding: 'LATIN-1', header_converters: :symbol) do |row|
      # raise row.inspect
      begin
        Address.find_or_create_by_street_and_city_and_zip_and_name(row[:adresse], row[:ort], row[:plz], row[:name])
      rescue
        nil
      end
    end
  end
end
