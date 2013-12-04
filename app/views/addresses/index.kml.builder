xml = Builder::XmlMarkup.new(indent: 2)
xml.instruct!
xml.kml(xmlns: "http://www.google.com/earth/kml/2" ) do
  xml.Document do
    xml.name "Tausend und eine Rampe Orte"
    @addresses.each do |addr|
      xml.Placemark do
        xml.name(addr.name)
        xml.description(addr.address)
        xml.Point do
          xml.coordinates([addr.longitude, addr.latitude, "0"].join(', '))
        end
      end
    end
  end
end