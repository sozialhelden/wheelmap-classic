# PlanetReader liest OSM-Planet-Files ein und aktualisiert die Datenbank.

require 'rubygems'
require 'libxml'
require 'htmlentities'

class CsvExporter
  include LibXML::XML::SaxParser::Callbacks

  # Konstruktor.
  #
  def initialize(instream_or_infile = STDIN, outfile = 'wheelmap.csv')
    @start_time = Time.now
    @processed = 0
    @parser = instream_or_infile.is_a?(String) ? LibXML::XML::SaxParser.file(instream_or_infile) : LibXML::XML::SaxParser.io(instream_or_infile, encoding: XML::Encoding::UTF_8)
    @parser.callbacks = self
    @output = CSV.open(outfile, 'w', force_quotes: true)
    @output << ['OSM ID', 'OSM TYPE', 'Name', 'Kategorie', 'Rollstuhlstatus', 'lat', 'lon', 'Strasse', 'Hausnummer', 'Stadt', 'Postleitzahl']
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
    sleep 1
    @duration = (Time.now - @start_time).to_i
    puts "\nProcessed #{@processed} nodes in #{@duration}s ~= #{@processed / @duration}/s"
    @output.close
  end

  # Callback-Methode des XML-Parsers.
  #
  def on_start_element(element, attributes)
    case element
    when 'tag'
      k = attributes['k']
      # Eliminate utf-encoded HTML Entitiy for & => &amp; or &#38;
      v = @decoder.decode(attributes['v'])
      @poi[:tags][k.to_sym] = v if @poi
    when 'node', 'way'
      @poi = { id: attributes['id'],
               type: element,
               lat: attributes['lon'],
               lon: attributes['lat'],
               tags: {} }

    end
  end

  # Callback-Methode des XML-Parsers.
  #
  def on_end_element(element)
    case element
    when 'node', 'way'
      process_poi
      @processed += 1
      @poi = nil

    end
  end

  def has_tags?
    !@poi[:tags].blank?
  end

  # Verarbeitet einen POI.
  #
  def process_poi
    status = @poi[:tags][:wheelchair].blank? ? :unknown : @poi[:tags][:wheelchair]
    node_type = NodeType.find_by_identifier
    # @output << ["ID", "Name", "Kategorie", "Rollstuhlstatus", "lat", "lon", "Strasse", "Hausnummer", "Stadt", "Postleitzahl"]
    @output << [@poi[:id], @poi[:type], @poi[:tags][:name], @poi[:tags][:amenity] || @poi[:tags][:healthcare], @poi[:tags][:wheelchair], @poi[:lat], @poi[:lon], @poi[:tags][:'addr:street'], @poi[:tags][:'addr:housenumber'], @poi[:tags][:'addr:city'], @poi[:tags][:'addr:postcode']]
    # TODO: write line to csv
  end
end
