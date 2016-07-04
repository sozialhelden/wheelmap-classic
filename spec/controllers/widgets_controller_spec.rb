require 'rails_helper'

describe WidgetsController do
  include Devise::TestHelpers

  let(:user) {
    FactoryGirl.create(:user, :email => 'test@rspec.org', :oauth_token =>'token', :oauth_secret => 'secret')
  }

  let (:widget) {
    FactoryGirl.create(:widget, user: user)
  }

  describe "POST #update" do
    context "with a signed in user" do

      before :each do
        sign_in user
        request.env['HTTP_ACCEPT'] = 'application/json'
      end

      it "updates a widget" do
        put :update, :id => widget.id, widget: { :lat => 50, :lon => 40 }
        expect(response.status).to eq(200)

        response_body = JSON.parse(response.body, symbolize_names: true)

        expect(response_body[:lat]).to eq(50)
        expect(response_body[:lon]).to eq(40)
      end
    end
  end

  describe "embed" do
    context "with a valid token" do
      it "displays the widget" do
        get :embed, :key => widget.user.api_key
        expect(response).to be_success
        expect(assigns(:widget)).to be_truthy
      end
    end

    context "with an invalid token" do
      it "cannot be found" do
        get :embed, :key => 'invalid'
        expect(response.status).to eq(404)
        expect(assigns(:widget)).to be_falsey
      end
    end

    context "with missing token" do
      it "displays the default layout" do
        get :embed, :key => nil
        expect(response).to be_success
        expect(assigns(:widget)).to be_falsey
      end
    end

    context "the response" do
      it "does not have x-frame-options header" do
        get :embed, :key => widget.user.api_key
        expect(response.headers.include?('X-Frame-Options')).to be_falsey
      end
    end
  end
end
