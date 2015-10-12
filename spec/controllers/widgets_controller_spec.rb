require 'spec_helper'

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
        put :update, :id => widget.id, widget: FactoryGirl.build(:widget).attributes
        expect(response.status).to eq(200)
      end
    end
  end

  describe "embed" do
    context "with a valid token" do
      it "displays the widget" do
        get :embed, :key => widget.user.api_key
        expect(response).to be_success
        expect(assigns(:widget)).to be_true
      end
    end

    context "with an invalid token" do
      it "cannot be found" do
        get :embed, :key => 'invalid'
        expect(response.status).to eq(404)
        expect(assigns(:widget)).to be_false
      end
    end

    context "with missing token" do
      it "cannot be found" do
        get :embed, :key => nil
        expect(response.status).to eq(404)
        expect(assigns(:widget)).to be_false
      end
    end
  end
end
