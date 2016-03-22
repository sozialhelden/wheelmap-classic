require 'rails_helper'
require 'pry'

# Feature: Search
feature "Search Feature" do
  background do
    # Given I am on the home page
    visit root_path
    find('button.go').click
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

    it "is possible to search for 'Herborn in search input field'" do
      pending
      within ('#search') do
        # And I search for "Herborn"
        fill_in 'value', with: 'herborn'
      end
      click_button('Finden')
      # Then I should be on the search result page
      expect(page).to redirect_to('/search?q=herborn')
    end
  end
end
