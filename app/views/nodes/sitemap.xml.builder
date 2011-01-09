xml = Builder::XmlMarkup.new(:indent => 1)
xml.instruct!
xml.sitemapindex(:xmlns => "http://www.sitemaps.org/schemas/sitemap/0.9") do
  (@count / 500.0).ceil.times do |n|
    page = nil
    page = (n + 1) unless n == 0
    xml.sitemap do
      xml.loc nodes_url(:format => :sitemap, :page => page)
    end
  end
end
