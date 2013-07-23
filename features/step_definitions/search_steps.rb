Given /^I search for "([^"]*)"$/ do |arg1|
  fill_in 'search', :with => arg1
  click_button 'Finden'
end

Given /^a search result exists for the query "([^"]*)"$/ do |query|
  search_result = <<-EOR
    [{"place_id":"116998025","licence":"Data Copyright OpenStreetMap Contributors, Some Rights Reserved. CC-BY-SA 2.0.","osm_type":"relation","osm_id":"1245136","boundingbox":["49.6095492813","49.9295492813","7.12593639533","7.44593639533"],"lat":"49.7695492812658","lon":"7.2859363953348","display_name":"Herborn, Herrstein, Birkenfeld, Rheinland-Pfalz, Deutschland","class":"boundary","type":"administrative","icon":"http://open.mapquestapi.com/nominatim/v1/images/mapicons/poi_boundary_administrative.p.20.png"}]
  EOR

  stub_request(:get, "http://nominatim.openstreetmap.org/search?accept-language=de&dedupe=1&email=info@wheelmap.org&format=json&limit=10&osm_type=N&q=#{query}").
    to_return(:body => search_result, :headers => {'Content-Type' => 'text/json'})
end

Given /^a search for "([^"]*)" delivers the following results$/ do |query, table|
  table.hashes.each { |h| fix_searchresult_boundingbox(h) }
  stub_request(:get, "http://nominatim.openstreetmap.org/search?accept-language=de&dedupe=1&email=info@wheelmap.org&format=json&limit=10&osm_type=N&q=#{query}").
    to_return(:body => table.hashes.to_json, :headers => {'Content-Type' => 'text/json'})
end
