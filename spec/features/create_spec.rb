require 'rails_helper'
require 'shared_context/omniauth'

describe "Create a new node via website" do
  include_context "OmniAuth"

  before do
    FactoryGirl::create(:node, osm_key: "amenity", osm_value: "bar", identifier: "bar")
  end

  describe "Create a new node" do
    before do
      FactoryGirl::create(:user, email: "creator@wheelmap.org", password: "123456", password_confirmation: "123456", confirmed_at: "10.10.1999", oauth_token: "oauth_token", oauth_secret: "oauth_secret", osm_id: "174")
      FactoryGirl::create(:node_type, identifier: 'bar', osm_key: 'amenity', osm_value: 'bar')

      visit new_user_session_path
      visit '/users/auth/osm'
      visit '/users/auth/osm/callback'
    end

    specify "the current page is the home page" do
      expect(current_path).to eq root_path
    end

    describe "The new node page" do
      before do
        first(:link, "Ort hinzufügen").click
      end

      specify "the current page is the new node page" do
        expect(current_path).to eq new_node_path
      end

      describe "Fill in form" do
        before do
          page.find_field('node_lon').base.native.remove_attribute("readonly")
          page.find_field('node_lat').base.native.remove_attribute("readonly")

          fill_in("Name", with: "Hotel Recklinghausen")
          fill_in("Info zu Barrierefreiheit:", with: "Klingeln und nach Rampe fragen.")
          fill_in("Breitengrad", with: 54.1)
          fill_in("Längengrad", with: 13.9)
          fill_in("Straße", with: "Hühnerpfad")
          fill_in("Nr", with: 99)
          fill_in("PLZ", with: 11122)
          fill_in("Ort", with: "Wienerwald")
          fill_in("Webseite", with: "http://wienerwald.de")
          fill_in("Telefon", with: "+49 800 123344")
          select("Voll Rollstuhlgerecht", from: "Rollstuhlgerecht?")
          select("Bar", from: "Typ")

          click_button("Ort anlegen")
        end

        specify "The current page is home page" do
          expect(current_path).to eq root_path
        end

        describe "Create node job" do
          let(:job) { YAML.load(Delayed::Job.last.handler) }

          it "is enqueued" do
            expect(Delayed::Job.count).to be > 0
          end

          it "has lat field" do
            expect(job.send("lat")).to eq 54.1
          end

          it "has lon field" do
            expect(job.send("lon")).to eq 13.9
          end

          it "has name" do
            expect(job.tags["name"]).to eq "Hotel Recklinghausen"
          end

          it "has amenity" do
            expect(job.tags["amenity"]).to eq "bar"
          end

          it "has wheelchair" do
            expect(job.tags["wheelchair"]).to eq "yes"
          end

          it "has description" do
            expect(job.tags["wheelchair:description"]).to eq "Klingeln und nach Rampe fragen."
          end

          it "has website" do
            expect(job.tags["website"]).to eq "http://wienerwald.de"
          end

          it "has phone" do
            expect(job.tags["phone"]).to eq "+49 800 123344"
          end

          describe "address" do
            it "has street" do
              expect(job.tags["addr:street"]).to eq "Hühnerpfad"
            end

            it "has house number" do
              expect(job.tags["addr:housenumber"]).to eq "99"
            end

            it "has city" do
              expect(job.tags["addr:city"]).to eq "Wienerwald"
            end

            it "has postcode" do
              expect(job.tags["addr:postcode"]).to eq "11122"
            end
          end
        end
      end
    end
  end
end
