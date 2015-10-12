require 'spec_helper'

describe Api::WidgetsController do
  render_views

  let(:user) {
    FactoryGirl.create(:user)
  }

  let(:widget) {
    FactoryGirl.create(:widget, :user => user)
  }

  # describe "GET #show" do
  #
  #   context 'format json' do
  #
  #     before :each do
  #       request.env['HTTP_ACCEPT'] = 'application/json'
  #     end
  #
  #     it "responds with widget data in json format" do
  #       get :show, api_key: user.authentication_token, id: widget
  #       expect(response).to be_success
  #       json = JSON.parse(response.body)
  #       #p json
  #     end
  #
  #   end
  #
  #   context "format xml" do
  #
  #     before :each do
  #       request.env['HTTP_ACCEPT'] = 'application/xml'
  #     end
  #
  #     it "responds with widget data in xml format" do
  #       get :show, :api_key => user.authentication_token, id: widget
  #       expect(response).to be_success
  #       #p Nokogiri::XML(response.body).to_s
  #     end
  #   end
  # end

  describe "POST #update" do
    context "with a signed in user" do

      before :each do
        request.env['HTTP_ACCEPT'] = 'application/json'
      end

      it "updates a widget" do
        put :update, :id => widget.id, widget: FactoryGirl.build(:widget).attributes
        #expect(response).to redirect_to(widgets_profile_path)
      end
    end
  end
end
