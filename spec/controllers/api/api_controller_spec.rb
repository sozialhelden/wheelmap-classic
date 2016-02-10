require 'rails_helper'

describe Api::ApiController do

  render_views

  let :user do
    FactoryGirl.create(:user)
  end

  before :all do
    User.delete_all
  end

  describe 'index action' do
    it "should show root api stuff" do
      get(:index, :api_key => user.authentication_token)
      expect(response.status).to eql 200
    end
  end
end
