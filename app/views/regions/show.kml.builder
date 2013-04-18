require 'builder'
xml = Builder::XmlMarkup.new(:indent=>2)
xml.instruct!
xml.kml(:xmlns => "http://www.opengis.net/kml/2.2" ) do
  xml.Document do
    xml.Placemark do
      xml.name @region.name
      xml << @region.grenze.as_kml
    end
  end
end