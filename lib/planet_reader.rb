# PlanetReader liest OSM-Planet-Files ein und aktualisiert die Datenbank.

# Benutzt Nokogiri statt Rubys eingebautem ReXML, weil Nokogiri viel 
# schneller ist. Haette gern libxml benutzt, aber die hat einen Bug, 
# der zu zu grossem Speicherverbrauch beim Einlesen des Planet fuehrt.

require 'rubygems' 
require 'nokogiri' 

class PlanetReader < Nokogiri::XML::SAX::Document

    # Konstruktor.
    #
    def initialize(file)

        @file = file
        @processed = 0
        @parser = Nokogiri::XML::SAX::Parser.new(self)
        @delete_ids = Array.new

    end

    # Hauptmethode. Liest die Datei und verarbeitet sie.
    #
    def load

        begin
            @parser.parse_file(@file)

            if (@delete_ids.length > 0) 
                Poi.delete(@delete_ids) 
            end
        end

    end

    # Callback-Methode des XML-Parsers.
    #
    def start_element(element, attributes)

        if element == 'osm'
            @osmchange = false
        elsif element == 'osmChange'
            @osmchange = true
        elsif @osmchange && element == 'modify'
            @changemode = element
        elsif @osmchange && element == 'delete'
            @changemode = element
        elsif @osmchange && element == 'create'
            @changemode = element
        elsif element == 'node'
            a = Hash[*attributes]
            @poi = Poi.new(
                :geom => Point.from_x_y(a['lon'], a['lat']),
                :version => a['version']
            )
            @poi.osm_id = a['id']
        elsif @poi && element == 'tag'
            @poi.tags = Hash.new() unless @poi.tags
            # strenggenommen muesste man hier wieder erst ein Hash bauen,
            # aber die Form ist immer <tag k="key" v="value" />
            @poi.tags[attributes[1]]=attributes[3]
        elsif !@changemode && element == 'way'
            Process.exit
        end

    end

    # Callback-Methode des XML-Parsers.
    #
    def end_element(element)

        if element == 'node'
            process_poi 
            @processed += 1
            if (@processed.modulo(1000) == 0)
                print("\r#{@processed/1000}k nodes")
                STDOUT.flush
            end
            @poi = nil
        end

    end

    # Verarbeitet einen POI.
    #
    def process_poi

        if !@osmchange || @changemode == 'create'

            # Neue POIs (aus <create> in .osc oder aus .osm) werden
            # importiert, wenn sie interessant sind.

            @poi.save! if @poi.interesting?

        elsif @changemode == 'modify'

            # Bei geaenderten POIs kommt es darauf an:

            if (@poi.interesting?)

                # falls die neue Version des Nodes interessant ist, muessen
                # wir schauen: entweder ist der schon in der Datenbank,
                # dann brauchts einen Update, sonst einen Save. Es ist uns
                # aber zu zeitaufwendig, erst einen "find" zu machen - wir
                # probieren den Save, und wenn der nicht geht, probieren wir
                # den Update.

                begin
                    @poi.save!
                rescue 
                    @poi.clear_new_flag()
                    @poi.save!
                end

            else

                # falls die neue Version des Nodes nicht interessant ist,
                # muss eine eventuell existierende alte Version geloescht
                # werden. wir pruefen hier nicht extra mit 
                # "find_by_osm_id", ob eine alte Version ueberhaupt 
                # existiert, denn das waere Zeitverschwendung; der
                # delete-Aufruf macht das schneller.
                @delete_ids << @poi.osm_id

            end

        elsif @changemode == 'delete'

            # Loeschen ist einfach. Wir sammeln allerdings immer ein paar 
            # IDs und machen dann einen gruppierten Loesch-Aufruf.

            @delete_ids << @poi.osm_id

        end

        if (@delete_ids.length > 200) 
            Poi.delete(@delete_ids) 
            delete_ids = Array.new
        end
    end
end

raise "Dateinamen auf der Befehlszeile angeben" unless ARGV.length() == 1
raise "Datei #{ARGV[0]} kann nicht geoeffnet werden" unless File.exists?(ARGV[0])
p = PlanetReader.new(ARGV[0])
p.load()

