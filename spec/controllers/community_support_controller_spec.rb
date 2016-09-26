require 'rails_helper'

RSpec.describe CommunitySupportController, type: :controller do

  describe "GET #new" do
    it "returns http success" do
      get :new
      expect(response).to have_http_status(:success)
    end
  end

  describe "POST #create" do
    let(:subject) { "Bugreport von wheelmap.org" }
    let(:user_name) { "holger" }
    let(:email) { "holger@example.com" }
    let(:message) {"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean\r\n commodo ligula eget dolor. Aenean massa."}
    let(:user_agent) { 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:48.0) Gecko/20100101 Firefox/48.0' }
    let(:osm_username) { 'lisa maier' }

    context "with valid form params and user not logged in" do
      before do
        ActionMailer::Base.deliveries.clear
        I18n.locale = :en
        allow(request).to receive(:user_agent).and_return(user_agent)
        params = {:community_support_request => { name: user_name, email: "holger@example.com", message: message }}
        post :create, params
      end

      it "returns http found" do
        expect(response).to have_http_status(:found)
      end

      it "redirects to root path" do
        expect(response).to redirect_to(root_path)
      end

      it "sends email notification to the community support team" do
        expect(ActionMailer::Base.deliveries.size).to eq(1)
      end

      describe "email header" do
        let(:last_delivery){ ActionMailer::Base.deliveries.last }

        it "contains email subject" do
          expect(last_delivery.subject).to eq(subject)
        end
      end

      describe "email body" do
        let(:last_delivery){ ActionMailer::Base.deliveries.last }
        let(:raw_body) { last_delivery.body.raw_source }

        it "contains the user's name" do
          expect(raw_body).to include(user_name)
        end

        it "contains the user's email" do
          expect(raw_body).to include(email)
        end

        it "contains the user's message" do
          expect(raw_body).to include(message)
        end

        it "contains the currently selected language" do
          expect(raw_body).to include("Sprache: en")
        end

        describe "the user agent" do
          it "has correct operating system vendor" do
            expect(raw_body).to include("Betriebssystem Hersteller: Macintosh")
          end

          it "has correct operating system" do
            expect(raw_body).to include("Betriebssystem Version: OS X 10.11")
          end

          it "has correct browser vendor" do
            expect(raw_body).to include("Browser Hersteller: Firefox")
          end

          it "has correct browser version" do
            expect(raw_body).to include("Browser Version: 48.0")
          end

          it 'does not contain notice that the user is logged in' do
            expect(raw_body).to_not include("BenutzerIn ist eingeloggt mit: #{osm_username}")
          end
        end
      end

      context 'with valid form params and user is logged in' do
        let(:current_user) { FactoryGirl.create(:user, :email => 'test@rspec.org', :oauth_token =>'token', :oauth_secret => 'secret', osm_username: osm_username) }
        before do
          sign_in current_user
          ActionMailer::Base.deliveries.clear
          allow(request).to receive(:user_agent).and_return(user_agent)
          params = {:community_support_request => { name: user_name, email: "holger@example.com", message: message }}
          post :create, params
        end

        describe 'the email' do
          let(:last_delivery){ ActionMailer::Base.deliveries.last }
          let(:raw_body) { last_delivery.body.raw_source }

          it 'contains notice that the user is logged in' do
            expect(raw_body).to include("BenutzerIn ist eingeloggt mit: #{osm_username}")
          end
        end
      end
    end

    context "with invalid form params" do
      before do
        ActionMailer::Base.deliveries.clear

        params = {:community_support_request => { name: user_name, email: "holger$example.com", message: message }}
        post :create, params
      end

      it "rerenders the form" do
        expect(response).to render_template("new")
      end

      it "does not send email notification to the community support team" do
        expect(ActionMailer::Base.deliveries).to be_empty
      end
    end
  end
end
