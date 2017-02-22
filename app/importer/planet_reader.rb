# PlanetReader liest OSM-Planet-Files ein und aktualisiert die Datenbank.

require 'rubygems'
require 'libxml'
require 'activerecord-import/base'
require 'htmlentities'

ActiveRecord::Import.require_adapter('mysql2')
class PlanetReader
  include LibXML::XML::SaxParser::Callbacks

  # Konstruktor.
  #
  def initialize(stream_or_file = STDIN, full = false, create_table = false, swap_table = false)
    @full = full
    @create = create_table
    @swap = swap_table
    if @create
      ActiveRecord::Base.connection.execute 'DROP TABLE IF EXISTS tmp_pois'
      ActiveRecord::Base.connection.execute 'CREATE TABLE tmp_pois LIKE pois'
    end
    Poi.set_table_name 'tmp_pois' if @full
    @start_time = Time.now
    @processed = 0
    @parser = stream_or_file.is_a?(String) ? LibXML::XML::SaxParser.file(stream_or_file) : LibXML::XML::SaxParser.io(stream_or_file, encoding: XML::Encoding::UTF_8)
    @parser.callbacks = self
    @columns = [:osm_id, :version, :tags, :geom, :status, :created_at, :updated_at, :node_type_id, :region_id, :toilet]
    @columns_without_create = @columns - [:created_at]
    @to_be_created = []
    @to_be_deleted = []
    @combination = NodeType.combination
    @decoder = HTMLEntities.new(:expanded)
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
    @parser.parse
  rescue Exception => e
    puts e.message
    puts e.backtrace
  ensure
    create_pois(1)
    flush_pois(1)
    sleep 1
    if @full && @swap
      ActiveRecord::Base.connection.execute 'RENAME TABLE pois TO old_pois, tmp_pois TO pois'
      ActiveRecord::Base.connection.execute 'DROP TABLE old_pois'
    end
    @duration = (Time.now - @start_time).to_i
    puts "\nINFO: Processed #{@processed} nodes in #{@duration}s ~= #{@processed / @duration}/s" unless Rails.env.test?
  end

  def create_pois(min_amount = 500)
    if @to_be_created.size >= min_amount
      Poi.import @columns, @to_be_created, validate: false, on_duplicate_key_update: @columns_without_create, timestamps: false
      for creation in @to_be_created do
        puts "Creating POI #{creation[0]}"
      end
      @to_be_created = []
    end
  end

  def flush_pois(min_amount = 500)
    if @to_be_deleted.size >= min_amount
      Poi.where(osm_id: @to_be_deleted).destroy_all
      for deletion in @to_be_deleted do
        puts "Deleting POI #{deletion}"
      end
      @to_be_deleted = []
    end
  end

  # Callback-Methode des XML-Parsers.
  #
  def on_start_element(element, attributes)
    case element
    when 'tag'
      k = attributes['k']
      # Eliminate utf-encoded HTML Entitiy for & => &amp; or &#38;
      v = @decoder.decode(attributes['v'])
      @poi[:tags][k] = v if @poi
      begin
        @poi[:node_type_id] ||= @combination[k.to_s][v.to_s]
      rescue
        nil
      end
    when 'node'
      @poi = nil
      id = attributes['id'].to_i
      if id > 0
        @poi = { osm_id: id,
                 geom: latlon_as_wkt(attributes),
                 version: attributes['version'].to_i,
                 tags: {},
                 created_at: Time.now,
                 updated_at: Time.now }
      elsif id < 0 && id > -10_000_000
        # Ignore, its a node from a relation.
        #  update relation id.abs in osm
        # puts "Ignore: it's from a relation: #{id}"
      else
        # It's a node from a way
        # update way "-id-10000000" in osm
        # puts "Process: it's from a way: #{(id + 10000000).abs}"
        @poi = { osm_id: (id + 10_000_000),
                 geom: latlon_as_wkt(attributes),
                 version: attributes['version'].to_i,
                 tags: {},
                 created_at: Time.now,
                 updated_at: Time.now }
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

        if @processed % 1000 == 0
          create_pois if @processed % 5000 == 0
          print("\rprocessed #{@processed / 1000}k nodes")
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

    toilet = @poi[:tags]['toilets:wheelchair']
    case toilet.try(:downcase)
    when 'yes', 'true', '1'
      @poi[:toilet] = true
    when 'no', 'false', '0'
      @poi[:toilet] = false
    else
      @poi[:toilet] = nil
    end

    if !@osmchange
      # Neue POIs aus *.osm
      # Purer input aus einem Planet Dump.
      # Stumpf einfach alles in die DB hauen!
      if valid?
        @to_be_created << @columns.map { |c| @poi[c] }
        create_pois
      end

    elsif @changemode == 'create'
      # Neue POIs (aus <create> in .osc) werden
      # importiert, wenn sie interessant sind.
      if valid?
        # Der Node ist valide und kann neu angelegt werden.
        @to_be_created << @columns.map { |c| @poi[c] }
        create_pois
      else
        # Der Node ist nicht valide. Falls er schon im System ist, muss er entfernt werden.
        @to_be_deleted << @poi[:osm_id]
        flush_pois
      end
    elsif @changemode == 'modify'
      # Bei geaenderten POIs kommt es darauf an:

      if valid?
        # falls die neue Version des Nodes interessant ist, muessen
        # wir schauen: entweder ist der schon in der Datenbank,
        # dann brauchts einen Update, sonst einen Save. Es ist uns
        # aber zu zeitaufwendig, erst einen "find" zu machen - wir
        # probieren den Save, und wenn der nicht geht, probieren wir
        # den Update.
        @poi[:region_id] = nil
        @to_be_created << @columns.map { |c| @poi[c] }
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
