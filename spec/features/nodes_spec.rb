require 'rails_helper'

describe "Nodes Feature" do
  describe "Find, update and create nodes via API" do
    before do
      provider = FactoryGirl.create(:provider, name: "Stiftung Gesundheit")
      poi = FactoryGirl.create(:poi)
      FactoryGirl.create(:provided_poi, wheelchair: "yes", url: "http://www.arzt-auskunft.de", poi: poi, provider: provider )
      visit(node_path(poi))
    end

    # Scenario: I want to see a decent title on the poi detail page
    describe "poi detail page" do
      it "has a decent title" do
          title_text = "Dieser Ort ist auf Wheelmap.org: name, Bar, Essen & Trinken, Berlin"
          expect(page.title).to eq(title_text)
      end

      # Scenario: I want to see a link to a landing page on the poi detail page
      it "has a link to a landing page" do
        expect(page).to have_link('Alle Orte vom Typ', href: "/map/berlin/bar/wheelchair/yes")
      end

      # Scenario: I want to see a back link to the root page
      it "has a back link to the root page" do
        click_link('zurück')
        expect(page).to have_current_path(root_path)
      end
    end

    # Scenario: I want to see a link to provider's detail page
    describe "provider detail page (e.g. Stiftung Gesundheit)" do
      it "has info box content: 'Stiftung Gesundheit'" do
        expect(page).to have_content("Stiftung Gesundheit")
      end

      describe 'dropdown' do
        let(:selectbox){ all(:css, 'div.node-status-dropdown').first }

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
        expect(page).to have_content("Yes, we have a ramp.")
      end
    end
  end
end
