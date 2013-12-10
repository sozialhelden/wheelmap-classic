require 'builder'
xml = Builder::XmlMarkup.new(indent: 2)
xml.instruct!
xml.kml(xmlns: "http://www.google.com/earth/kml/2" ) do
  xml.Document do
    xml.name "Tausendundeine Rampe - Die Orte"
    xml.description do
      xml.cdata! "Wir wollen Zugang zu neuen Räumen für Rollstuhlfahrer, Familien mit Kinderwagen und Menschen mit Rollatoren schaffen. Durch die mobilen Rampen können die Betreiber von z.B. Cafés, Restaurants und Friseurläden ganz unkompliziert und kostenschlank den Zugang zu Ihren Räume ermöglichen. Ohne aufwendige Baumaßnahmen oder behördlichen Aufwand.

Das Projekt ist durch eine Spendenaktion von den SOZIALHELDEN und der Crowdinvestment-Firma BERGFÜRST entstanden. In der Aktion, die einen Monat lang lief, wurde Geld für 200 Rampen gesammelt.

Die Orte auf dieser Karte haben eine Rampe aus der Spendenaktion erhalten.

Alle weiteren Infos gibt es auf www.tausendundeinerampe.de"
    end

    xml.Style id: "styleIcon" do
      xml.IconStyle do
        xml.Icon do
          xml.href "http://wheelmap.org/wp-content/uploads/2013/12/tausendundeinerampe_icon4.png"
        end
      end
    end

    @addresses.each do |addr|
      xml.Placemark do
        xml.name addr.name
        xml.description do
          xml.cdata! addr.address
        end
        xml.Snippet addr.address
        xml.styleUrl "#styleIcon"
        xml.Point do
          xml.coordinates([addr.longitude, addr.latitude, "0"].join(', '))
        end
      end
    end
  end
end