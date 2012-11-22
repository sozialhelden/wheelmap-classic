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
    @combination = NodeType.combination
  end

  def values
    @values ||= NodeType.all.map(&:osm_value).uniq
  end

  def keys
    @keys ||= NodeType.all.map(&:osm_key).uniq
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
      flush_pois(1)
      sleep 1
      @duration = (Time.now - @start_time).to_i
      puts "\nINFO: Processed #{@processed} nodes in #{@duration}s ~= #{@processed/@duration}/s" unless Rails.env.test?
    end
  end

  def flush_pois(min_amount=200)
    if @to_be_deleted.size >= min_amount
      Poi.delete_all(['osm_id in (?)', @to_be_deleted])
      @to_be_deleted = []
    end
  end

  # Callback-Methode des XML-Parsers.
  #
  def on_start_element(element, attributes)
    case element
    when 'tag'
      k = attributes['k']
      v = attributes['v']
      # Eliminate utf-encoded HTML Entitiy for & => &amp; or &#38;
      if @poi && (k == 'website' || k == 'name')
        v = v.gsub(/&#38;|&amp;/, '&')
      end
      @poi[:tags][k] = v if @poi
      @poi[:node_type_id] ||= @combination[k.to_s][v.to_s] rescue nil
    when 'node'
      #puts attributes.inspect
      @poi = nil
      id = attributes['id'].to_i
      if (id > 0) then
        @poi = {:osm_id => id,
                :geom => Point.from_x_y(attributes['lon'].to_f, attributes['lat'].to_f),
                :version => attributes['version'].to_i,
                :tags => {}}
      elsif (id < 0 and id > -10000000) then
        # Ignore, its a node from a relation.
        #  update relation id.abs in osm
        # puts "Ignore: it's from a relation: #{id}"
      else
        # It's a node from a way
        # update way "-id-10000000" in osm
        # puts "Process: it's from a way: #{(id + 10000000).abs}"
        @poi = {:osm_id => (id + 10000000),
                :geom => Point.from_x_y(attributes['lon'].to_f, attributes['lat'].to_f),
                :version => attributes['version'].to_i,
                :tags => {}}
      end

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
      if @poi
        process_poi
        @processed += 1

        if (@processed % 1000 == 0)
          if (@processed % 5000 == 0)
            Crewait.go!
          end
          print("\rprocessed #{@processed/1000}k nodes")
          STDOUT.flush
        end
      end
      @poi = nil

    end
  end

  def valid?
    @poi && has_tags? && has_type? && !private?
  end

  def private?
    @poi[:tags]['access'] == 'private' || @poi[:tags]['access'] == 'no'
  end

  def has_tags?
    !@poi[:tags].blank?
  end

  def has_type?
    !@poi[:node_type_id].blank?
  end

  # Verarbeitet einen POI.
  #
  def process_poi
    # For some reason there is a node which empty wheelchair tag. Gotta handle this
    status = @poi[:tags]['wheelchair'] || 'unknown'
    if status.blank?
      @poi[:status] = Poi::WHEELCHAIR_STATUS_VALUES[:unknown]
    else
      @poi[:status] = Poi::WHEELCHAIR_STATUS_VALUES[status.to_sym]
    end

    return unless @poi[:status]
    if !@osmchange
      # Neue POIs aus *.osm
      # Purer input aus einem Planet Dump.
      # Stumpf einfach alles in die DB hauen!
      @poi[:created_at] = @poi[:updated_at] = Time.now
      Poi.crewait(@poi) if valid?

    elsif @changemode == 'create'
      # Neue POIs (aus <create> in .osc) werden
      # importiert, wenn sie interessant sind.
      @poi[:created_at] = @poi[:updated_at] = Time.now
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
        @poi[:updated_at] = Time.now
        @poi[:region_id] = nil
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

