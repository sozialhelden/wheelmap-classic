require 'rails_helper'

RSpec.describe CommunitySupportController, type: :controller do

  describe "GET #new" do
    it "returns http success" do
      get :new
      expect(response).to have_http_status(:success)
    end
  end

  describe "POST #create" do
    context "with valid form params" do
      before do
        ActionMailer::Base.deliveries = []
        post :create, { name: "holger", email: "holger@example.com", message: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."}
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
    end

    context "with invalid form params" do
      before do
        post :create, { name: "holger", email: "holger$example.com", message: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."}
      end

      it "rerenders the form" do
        expect(response).to render_template("new")
      end
    end
  end
end
