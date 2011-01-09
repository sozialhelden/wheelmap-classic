xml = Builder::XmlMarkup.new(:indent => 1)
xml.instruct!
xml.urlset(:xmlns => "http://www.sitemaps.org/schemas/sitemap/0.9") do
  @nodes.each do |node|
    xml.url do
      xml.loc node_url(node)
      if node.updated_at
        xml.lastmod node.updated_at
      end
      xml.priority (1.0 / node.status)
    end
  end
end
