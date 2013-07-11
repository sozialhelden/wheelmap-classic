# PlanetReader liest OSM-Planet-Files ein und aktualisiert die Datenbank.

require 'rubygems'
require 'libxml'
require 'upsert'

class PlanetReader

  include LibXML::XML::SaxParser::Callbacks

  # Konstruktor.
  #
  def initialize(stream_or_file=STDIN)
    @start_time = Time.now
    @processed = 0
    @parser = stream_or_file.is_a?(String) ? LibXML::XML::SaxParser.file(stream_or_file) : LibXML::XML::SaxParser.io(stream_or_file)
    @parser.callbacks = self
    @columns = [:osm_id, :version, :tags, :geom, :status, :created_at , :updated_at, :node_type_id, :region_id]
    @columns_without_create = @columns - [:created_at]
    @to_be_created = []
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
      create_pois(1)
      flush_pois(1)
      sleep 1
      @duration = (Time.now - @start_time).to_i
      puts "\nINFO: Processed #{@processed} nodes in #{@duration}s ~= #{@processed/@duration}/s" unless Rails.env.test?
    end
  end

  def create_pois(min_amount=500)
    if @to_be_created.size >= min_amount
      db_config_hash = ActiveRecord::Base.configurations[Rails.env]
      connection = PG.connect(:dbname => db_config_hash['database'], :user => db_config_hash['username'], :password => db_config_hash['password'], :host => db_config_hash['host'])
      table_name = Poi.table_name

      Upsert.batch(connection, table_name) do |upsert|
        @to_be_created.each do |poi_hash|
          poi_hash[:tags] = poi_hash[:tags].to_yaml
          upsert.row({:osm_id => poi_hash[:osm_id]}, poi_hash)
        end
      end

      @to_be_created = []
    end
  end

  def flush_pois(min_amount=500)
    if @to_be_deleted.size >= min_amount
      Poi.where(:osm_id => @to_be_deleted).delete_all
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
                :geom => latlon_as_wkt(attributes),
                :version => attributes['version'].to_i,
                :tags => {},
                :created_at => Time.now,
                :updated_at => Time.now }
      elsif (id < 0 and id > -10000000) then
        # Ignore, its a node from a relation.
        #  update relation id.abs in osm
        # puts "Ignore: it's from a relation: #{id}"
      else
        # It's a node from a way
        # update way "-id-10000000" in osm
        # puts "Process: it's from a way: #{(id + 10000000).abs}"
        @poi = {:osm_id => (id + 10000000),
                :geom => latlon_as_wkt(attributes),
                :version => attributes['version'].to_i,
                :tags => {},
                :created_at => Time.now,
                :updated_at => Time.now }
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

  def latlon_as_wkt(attributes)
    "POINT(#{attributes['lon']} #{attributes['lat']})"
  end

  # Callback-Methode des XML-Parsers.
  #
  def on_end_element(element)
    case element
    when 'delete'
      flush_pois(1)
    when 'create'
      create_pois(1)
      flush_pois(1)
    when 'modify'
      create_pois(1)
      flush_pois(1)
    when 'node'
      if @poi
        process_poi
        @processed += 1

        if (@processed % 1000 == 0)
          if (@processed % 5000 == 0)
            create_pois
          end
          print("\rprocessed #{@processed/1000}k nodes")
          STDOUT.flush
        end
      end
      @poi = nil
    end
  end

  def valid?
    @poi && has_tags? && has_type? && !private? && !abandoned?
  end

  def private?
    @poi[:tags]['access'] == 'private' || @poi[:tags]['access'] == 'no'
  end

  def abandoned?
    @poi[:tags]['disused'] == 'yes' || @poi[:tags]['abandoned'] == 'yes'
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
      if valid?
        @to_be_created << @poi.slice(*@columns)
        create_pois
      end

    elsif @changemode == 'create'
      # Neue POIs (aus <create> in .osc) werden
      # importiert, wenn sie interessant sind.
      if valid?
        # Der Node ist valide und kann neu angelegt werden.
        @to_be_created << @poi.slice(*@columns)
        create_pois
      else
        # Der Node ist nicht valide. Falls er schon im System ist, muss er entfernt werden.
        @to_be_deleted << @poi[:osm_id]
        flush_pois
      end
    elsif @changemode == 'modify'
      # Bei geaenderten POIs kommt es darauf an:

      if (valid?)
        # falls die neue Version des Nodes interessant ist, muessen
        # wir schauen: entweder ist der schon in der Datenbank,
        # dann brauchts einen Update, sonst einen Save. Es ist uns
        # aber zu zeitaufwendig, erst einen "find" zu machen - wir
        # probieren den Save, und wenn der nicht geht, probieren wir
        # den Update.
        @poi[:region_id] = nil
        @to_be_created << @poi.slice(*@columns)
        create_pois
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

