require 'spec_helper'

describe Api::WidgetsController do
  render_views

  let(:user) {
    FactoryGirl.create(:user)
  }

  let(:widget) {
    FactoryGirl.create(:widget, :user => user)
  }

  describe "GET #show" do

    context 'format json' do

      before :each do
        request.env['HTTP_ACCEPT'] = 'application/json'
      end

      it "responds with widget data in json format" do
        get :show, api_key: user.authentication_token, id: widget
        expect(response).to be_success
        json = JSON.parse(response.body)
        p json
      end

    end

    context "format xml" do

      before :each do
        request.env['HTTP_ACCEPT'] = 'application/xml'
      end

      it "responds with widget data in xml format" do
        get :show, :api_key => user.authentication_token, id: widget
        expect(response).to be_success
        p Nokogiri::XML(response.body).to_s
      end
    end


    # context "format html" do
    #
    #   before :each do
    #     request.env['HTTP_ACCEPT'] = 'text/html'
    #   end
    #
    #   it "responds with widget data in html format" do
    #
    #     get :show, :api_key => user.authentication_token, id: widget
    #     expect(response).to be_success
    #     p response.body
    #     expect(assigns(:widget)).to be_true
    #     expect(response).to render_template("api/widgets/show")
    #   end
    # end
  end

end
