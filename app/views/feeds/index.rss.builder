xml = Builder::XmlMarkup.new(:indent => 1)
xml.instruct!
xml.feed(:xmlns           => "http://www.w3.org/2005/Atom", 
         :'xmlns:georss'  => "http://www.georss.org/georss") {
  xml.title("Find Wheelchair accessible places")
  xml.subtitle "International places that are accessible for poeple relying on wheelchairs."
  xml.link(:href => "http://wheelmap.org/")
  xml.link(:rel => "first", :href => feeds_url(:format => 'rss'))
  if (@page > 1)
    xml.link(:rel => "previous", :href => feeds_url(:format => 'rss', :page => @page - 1))
  end
  xml.link(:rel => "self", :href => feeds_url(:format => 'rss', :page => @page))
  if(@page < @nodes.total_entries)
    xml.link(:rel => "next", :href => feeds_url(:format => 'rss', :page => @page + 1))
  end
  xml.link(:rel => "last", :href => feeds_url(:format => 'rss', :page => @nodes.total_pages))
  xml.updated(Time.now)
  xml.author {
     xml.name("Sozialhelden e.V.")
     xml.email("info@sozialhelden.de")
  }
  xml.id('urn:uuid:60a76c80-d399-11d9-b93C-0003939e0af6')
  @nodes.each do |node|
    xml.entry {
       xml.title(node.name || node.type)
       xml.tag!('georss:point', "#{node.lat} #{node.lon}")
       xml.id(node.osm_id)
       xml.link node_url(node)
       xml.summary("Fully wheelchair accessible")
    }
  end
}