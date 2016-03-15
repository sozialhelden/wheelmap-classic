require 'rails_helper'
require 'pry'

describe "Nodes Feature" do
  describe "Find, update and create nodes via API" do
    before do
      # Given a provider "stiftung" exists with name: "Stiftung Gesundheit"
      provider = FactoryGirl.create(:provider, name: "Stiftung Gesundheit")
      # And 1 valid pois exist
      poi = FactoryGirl.create(:poi)
      # And the following provided_pois exist
      FactoryGirl.create(:provided_poi, wheelchair: "yes", url: "http://www.arzt-auskunft.de", poi: poi, provider: provider )
      # When I am on the last poi's page
      visit(node_path(poi))
    end

    # Scenario: I want to see a decent title on the poi detail page
    describe "poi detail page" do
      it "has a decent title" do
          # Then I should see "Dieser Ort ist auf Wheelmap.org: name, Bar, Essen & Trinken, Berlin" within "title"
          title_text = "Dieser Ort ist auf Wheelmap.org: name, Bar, Essen & Trinken, Berlin"
          expect(page.title).to eq(title_text)
      end

      # Scenario: I want to see a link to a landing page on the poi detail page
      it "has a link to a landing page" do
        # Then I should see "Alle Orte vom Typ"
        expect(page).to have_link('Alle Orte vom Typ', href: "/map/berlin/bar/wheelchair/yes")
      end

      # Scenario: I want to see a back link to the root page
      it "has a back link to the root page" do
        save_page
        # When I follow "zurück"
        click_link('zurück')
        # Then I should be on the home page
        expect(current_path).to eq(root_path)
      end
    end

    # Scenario: I want to see a link to provider's detail page
    describe "provider detail page (e.g. Stiftung Gesundheit)" do
      # Then I should see "Stiftung Gesundheit"
      it "has info box content: 'Stiftung Gesundheit'" do
        expect(page).to have_content("Stiftung Gesundheit")
      end

      describe 'dropdown' do
        let(:selectbox){ all(:css, 'div.node-status-dropdown').first }

        # And I should see "Voll Rollstuhlgerecht"
        it "has content 'voll rollstuhlgerecht'" do
          expect(selectbox).to have_content("Voll Rollstuhlgerecht")
        end

        it "has content 'teilweise rollstuhlgerecht'" do
          expect(selectbox).to have_content("Teilweise rollstuhlgerecht")
        end

        it "has content 'nicht rollstuhlgerecht'" do
          expect(selectbox).to have_content("Nicht Rollstuhlgerecht")
        end

        context "when wheelchair has full access" do
          it "requires 'voll rollstuhlgerecht' to appear" do
            expect(selectbox.find(:css, "div ul li a.yes")).to have_content('Voll Rollstuhlgerecht')
          end

          it "requires 'voll rollstuhlgerecht' to be checked" do
            expect(selectbox.find(:css, "div ul li a.yes")).to have_css('span.checked')
          end
        end
      end

      # Scenario: I want to see a wheelchair description
      it "has a wheelchair description" do
        # Then I should see "Yes, we have a ramp."
        expect(page).to have_content("Yes, we have a ramp.")
      end
    end
  end
end
