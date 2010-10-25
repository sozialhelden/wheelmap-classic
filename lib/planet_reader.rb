# PlanetReader liest OSM-Planet-Files ein und aktualisiert die Datenbank.

require 'rubygems' 
require 'libxml'
require 'crewait'

class PlanetReader
  
  include LibXML::XML::SaxParser::Callbacks

  # Konstruktor.
  #
  def initialize(stream_or_file=STDIN)
    @start_time = Time.now
    @processed = 0
    @parser = stream_or_file.is_a?(String) ? LibXML::XML::SaxParser.file(stream_or_file) : LibXML::XML::SaxParser.io(stream_or_file)
    @parser.callbacks = self
    Crewait.start_waiting
    @to_be_deleted = []
  end

  # Hauptmethode. Liest die Datei und verarbeitet sie.
  #
  def load
    begin
      @parser.parse
    rescue Exception => e
      puts e.message
      puts e.backtrace
    ensure
      Crewait.go!
      flush_pois(0)
      sleep 1
      @duration = (Time.now - @start_time).to_i
      puts "\nProcessed #{@processed} nodes in #{@duration}s ~= #{@processed/@duration}/s"
    end
  end
  
  def flush_pois(min_amount=200)
    if @to_be_deleted.size >= min_amount
      Poi.delete(@to_be_deleted)
      @to_be_deleted = []
    end
    
  end

  # Callback-Methode des XML-Parsers.
  #
  def on_start_element(element, attributes)
    case element
    when 'tag'
      @poi[:tags][attributes['k']] = attributes['v'] if @poi
    when 'node'
      @poi = {:osm_id => attributes['id'],
              :geom => Point.from_x_y(attributes['lon'], attributes['lat']),
              :version => attributes['version'],
              :tags => {}}
    when 'modify'
      @changemode = element if @osmchange
    when 'delete'
      @changemode = element if @osmchange
    when 'create'
      @changemode = element if @osmchange
    when 'osm'
      @osmchange = false
    when 'osmChange'
      @osmchange = true
    else
      # ignore all other nodes
    end
  end

  # Callback-Methode des XML-Parsers.
  #
  def on_end_element(element)
    case element
    when 'delete'
      flush_pois
    when 'create'
      Crewait.go!
    when 'modify'
      Crewait.go!
      flush_pois
    when 'node'
      process_poi 
      @processed += 1
      
      if (@processed % 10000 == 0)
        Crewait.go!
        print("\rprocessed #{@processed/10000}0k nodes")
        STDOUT.flush
      end
      @poi = nil
      
    end

  end
  
  def valid?
    @poi && has_tags? && has_type? && has_category?
  end
  
  def has_tags?
    !@poi[:tags].blank?
  end
  
  def has_type?
    t = type
    !t.blank?
  end
  
  def has_category?
    c = category
    !c.blank?
  end
  
  def category
    Tags[type.to_sym]
  end
  
  def type
    @poi[:tags]['amenity']  ||
    @poi[:tags]['shop']     ||
    @poi[:tags]['tourism']  ||
    @poi[:tags]['natural']  ||
    @poi[:tags]['sport']    ||
    @poi[:tags]['leisure']  ||
    @poi[:tags]['historic'] ||
    @poi[:tags]['highway']  ||
    @poi[:tags]['station']  ||
    @poi[:tags]['railway']  
  end

  # Verarbeitet einen POI.
  #
  def process_poi
    status = @poi[:tags]['wheelchair'] || 'unknown'
    @poi[:status] = Poi::WHEELCHAIR_STATUS_VALUES[status.to_sym]
    return unless @poi[:status] 
    if !@osmchange
      # Neue POIs aus *.osm
      # Purer input aus einem Planet Dump.
      # Stumpf einfach alles in die DB hauen!
      Poi.crewait(@poi) if valid?
      
    elsif @changemode == 'create'
      # Neue POIs (aus <create> in .osc) werden
      # importiert, wenn sie interessant sind.
      Poi.crewait(@poi) if valid?

    elsif @changemode == 'modify'
      # Bei geaenderten POIs kommt es darauf an:

      if (valid?)
        # falls die neue Version des Nodes interessant ist, muessen
        # wir schauen: entweder ist der schon in der Datenbank,
        # dann brauchts einen Update, sonst einen Save. Es ist uns
        # aber zu zeitaufwendig, erst einen "find" zu machen - wir
        # probieren den Save, und wenn der nicht geht, probieren wir
        # den Update.
        Poi.crewait(@poi)
      else

        # falls die neue Version des Nodes nicht interessant ist,
        # muss eine eventuell existierende alte Version geloescht
        # werden. wir pruefen hier nicht extra mit 
        # "find_by_osm_id", ob eine alte Version ueberhaupt 
        # existiert, denn das waere Zeitverschwendung; der
        # delete-Aufruf macht das schneller.
        @to_be_deleted << @poi[:osm_id]
        flush_pois

      end

    elsif @changemode == 'delete'
      @to_be_deleted << @poi[:osm_id]
      flush_pois
    end
  end
end

