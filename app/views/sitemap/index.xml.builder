xml = Builder::XmlMarkup.new(:indent => 1)
xml.instruct!
xml.sitemapindex(:xmlns => "http://www.sitemaps.org/schemas/sitemap/0.9") do
  xml.sitemap do
    xml.loc sitemap_nodes_url(:format => :xml)
  end
end
