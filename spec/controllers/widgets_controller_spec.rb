require 'spec_helper'

describe WidgetsController do
  include Devise::TestHelpers

  let (:user) {
    FactoryGirl.create(:user, :email => 'test@rspec.org', :oauth_token =>'token', :oauth_secret => 'secret')
  }

  let (:widget) {
    FactoryGirl.create(:widget, user: user)
  }

  describe "embed" do
    context "with a valid token" do
      it "displays the widget" do
        get :embed, :api_key => widget.user.authentication_token
        expect(response).to be_success
        expect(assigns(:widget)).to be_true
      end
    end

    context "with an invalid token" do
      it "displays the widget" do
        get :embed, :api_key => 'invalid'
        expect(response.status).to eq(404)
        expect(assigns(:widget)).to be_false
      end
    end
  end

  describe "POST update" do
    context "with a signed in user" do

      before :each do
        sign_in user
      end

      it "updates a widget" do
        put :update, :id => widget.id, widget: FactoryGirl.build(:widget).attributes
        expect(response).to redirect_to(widgets_profile_path)
      end
    end
  end
end
