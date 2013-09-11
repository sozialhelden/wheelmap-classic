require 'geoip'

class GeoCache

  cattr_reader :geo_lite_city
  if Rails.env.development?
    @@geo_lite_city = GeoIP.new('tmp/GeoLiteCity.dat') rescue nil
  else
    @@geo_lite_city = GeoIP.new('/usr/share/GeoIP/GeoLiteCity.dat') rescue nil
  end

  def self.latlon(ip_address)
    res = geo_lite_city.city(ip_address) rescue nil
    if res
      [res[9],res[10]]
    else
      [52.5167, 13.4]
    end
  end
end