xml = Builder::XmlMarkup.new(:indent => 1)
xml.instruct!
xml.sitemapindex(:xmlns => "http://www.sitemaps.org/schemas/sitemap/0.9") do
  base_url = nodes_url(:format => :sitemap)
  ((@count / 500.0).ceil + 1).times do |n|
    next if n == 0
    xml.sitemap do
      xml.loc(base_url + "?page=#{n}")
    end
  end
end
