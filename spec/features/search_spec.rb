require 'rails_helper'

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
