require 'rails_helper'

RSpec.describe CommunitySupportController, type: :controller do

  describe "GET #new" do
    it "returns http success" do
      get :new
      expect(response).to have_http_status(:success)
    end
  end

  describe "POST #create" do
    before do
      post :create
    end

    it "returns http found" do
      expect(response).to have_http_status(:found)
    end

    it "redirects to root path" do
      expect(response).to redirect_to(root_path)
    end
  end
end
