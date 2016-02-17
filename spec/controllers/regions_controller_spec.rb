require 'rails_helper'

describe RegionsController do

  describe "GET #index" do

    before(:each) do
      get :index, :format => :kml
    end

    it "renders the regions index page" do
      expect(response).to render_template(:index)
    end

    it "returns a 200 (OK) ) http status code" do
      expect(response).to have_http_status(200)
    end
  end

  describe "GET #show" do
    let(:region) { FactoryGirl::create(:region)}

    before(:each) do
      get :show, id: region.id, format: :kml
    end

    it "renders the regions detail page" do
      expect(response).to render_template(:show)
    end

    it "returns a 200 (OK) ) http status code" do
      expect(response).to have_http_status(200)
    end
  end

end
