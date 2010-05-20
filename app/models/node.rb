class Node
  attr_accessor :xml, :osmid
  
  def self.find osmid
    Node.new(:osmid => osmid)
  end
  
  def initialize attrs = {}
    if @osmid = attrs[:osmid]
      xml_data = api_call(:get, "node/#{ @osmid }")
      @xml = REXML::Document.new(xml_data)
    end
  end
  
  def save_by! options = {}
    changeset options do
      update_wheelchair_source!
      api_call(:put, "node/#{ osmid }", options, @xml.to_s)
    end
  end
  
  def wheelchair= wheelchair
    raise unless %w(yes no limited).include?(wheelchair)
    if tag = REXML::XPath.first(node, '//tag[@k="wheelchair"]')
      tag.attributes['v'] = wheelchair
    else
      node.add_element 'tag', 'k' => 'wheelchair', 'v' => wheelchair
    end
  end

  def update_wheelchair_source!
    if REXML::XPath.first(node, '//tag[@k="wheelchair:source"]').nil?
      node.add_element 'tag', 'k' => 'wheelchair:source', 'v' => 'wheelmap.org'
    elsif source = REXML::XPath.first(node, '//tag[@k="wheelchair:source",@v!="wheelmap.org"]')
      source.attributes['v'] = 'wheelmap.org'
    end
  end
  
private

  def node
    @node ||= REXML::XPath.first(@xml, '//node')
  end
  
  def changeset options, &block
    changeset_xml = '<osm><changeset><tag k="created_by" v="hosm"/></changeset></osm>'
    id = api_call(:put, 'changeset/create', options, changeset_xml)
    node.attributes['changeset'] = id
    result = yield
    api_call(:put, "changeset/#{ id }/close", options)
    result
  end

  def api_call method, path, options = {}, data = nil
    http = Net::HTTP.new(OSM_HOST)
    if options[:token]
      auth = {
        :realm => 'http://wheelmap.org/',
        :oauth_token => options[:token],
        :oauth_consumer_key => OAUTH_KEY,
        :oauth_nonce => OAuth::Helper.generate_key,
        :oauth_signature_method => "HMAC-SHA1",
        :oauth_timestamp => OAuth::Helper.generate_timestamp,
        :oauth_version => "1.0"
      }
      headers = { 'Authorization' => 'OAuth ' + auth.map{ |k, v| %W(#{ k }="#{ v }") }.join(', ') }
    end
    request = eval("Net::HTTP::#{ method.to_s.titleize }").new("/api/0.6/#{path}", headers)
    request.body = data if data
    if options[:email]
      request.basic_auth options[:email], options[:password]
    end
    response = http.request(request)
    response.body
  end

end