require 'rails_helper'

describe 'Homepage' do
  before do
    visit root_path
  end

  it "contains 'Rollstuhgerechte Orte finden' within a logo" do
    within('.logo') do
      expect(page).to have_content('Rollstuhlgerechte Orte finden')
    end
  end
end
