require 'rails_helper'
require 'pry'

# Feature: Search
feature "Search Feature", type: :feature, js: true do
  background do
    # Given I am on the home page
    visit root_path
    using_wait_time 10 do
      expect(page).to have_css('div.overlay-wrapper div.overlay')
      div = find('div.overlay-wrapper div.overlay')
      expect(div).to have_xpath('//button')
      div.find('button').click
      # And search field is rendered with ember.js
      expect(page).to have_css('div#wheelmap div.ember-view')
    end
  end

  describe "Simple search" do
    # Given a search for "Herborn" delivers the following results
    let(:search_result) { FactoryGirl.create(
      search_result =
        [
          "place_id":"116998025",
          "licence":"Data Copyright OpenStreetMap Contributors, Some Rights Reserved. CC-BY-SA 2.0.",
          "osm_type":"relation",
          "osm_id":"1245136",
          "boundingbox":["49.6095492813","49.9295492813","7.12593639533","7.44593639533"],
          "lat":"49.7695492812658","lon":"7.2859363953348",
          "display_name":"Herborn, Herrstein, Birkenfeld, Rheinland-Pfalz, Deutschland",
          "class":"boundary",
          "type":"administrative",
          "icon":"http://open.mapquestapi.com/nominatim/v1/images/mapicons/poi_boundary_administrative.p.20.png"
        ]
    )}

    let(:search_input) { FactoryGirl.create(:css, 'div.input-append') }

    # And I search for "Herborn"
    it "is possible to search for 'Herborn'" do
      expect(page).to have_css('input#search')
      search = find(:css, 'input#search')
      search.set('herborn')
      expect(search.value).to eq('herborn')
      click_button('Finden')

      # Then I should be on the search result page
      expect(page.current_url).to end_with('/search?q=herborn')
    end
  end
end
