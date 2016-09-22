require 'rails_helper'

RSpec.describe CommunitySupportController, type: :controller do

  describe "GET #new" do
    it "returns http success" do
      get :new
      expect(response).to have_http_status(:success)
    end
  end

  describe "POST #create" do
    let(:user_name) { "holger" }
    let(:email) { "holger@example.com" }
    let(:message) {"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean\r\n commodo ligula eget dolor. Aenean massa."}
    let(:user_agent) { 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:48.0) Gecko/20100101 Firefox/48.0' }

    context "with valid form params" do

      before do
        ActionMailer::Base.deliveries.clear
        allow(request).to receive(:user_agent).and_return(user_agent)
        post :create, { name: user_name, email: "holger@example.com", message: message }
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

      describe "email body" do
        let(:last_delivery){ ActionMailer::Base.deliveries.last }

        it "contains the user's name" do
          expect(last_delivery.body.raw_source).to include(user_name)
        end

        it "contains the user's email" do
          expect(last_delivery.body.raw_source).to include(email)
        end

        it "contains the user agent" do
          expect(last_delivery.body.raw_source).to include(user_agent)
        end

        it "contains the user's message" do
          expect(last_delivery.body.raw_source).to include(message)
        end
      end
    end

    context "with invalid form params" do
      before do
        ActionMailer::Base.deliveries.clear

        post :create, { name: user_name, email: "holger$example.com", message: message }
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
