require 'spec_helper'

class UpdateWayAttributeJob <ActiveRecord::Base
  set_table_name 'delayed_jobs'
end

describe WaysController do
  include Devise::TestHelpers

  before(:each) do
    # default visitor user
    @base_url = "#{OpenStreetMapConfig.oauth_site}/api/0.6"
    @default_user = Factory.create(:user, :email => 'visitor@wheelmap.org')
    @another_user = Factory.create(:user, :email => 'test@rspec.org', :oauth_token =>'token', :oauth_secret => 'secret')
  end

  describe "action show" do

    before(:each) do
     WebMock.disable_net_connect!
     @full_url = "#{@base_url}/way/16581933"
    end

    it "should show way view" do
      Way.should_receive(:find).with(123).and_return(:a_way)
      get(:show, :id => 123)
      assigns(:way).should eql(:a_way)
      response.should be_success
    end

    it "should render not found page" do
      get(:show, :id => 123)
      response.should_not be_success
      response.code.should eql('404')
    end

  end

  describe "action update wheelchair" do
    describe "as anonymous user" do
      it "should create am UpdateWheelchairJob " do
        lambda {
          put(:update_wheelchair, :id => 1234, :wheelchair => 'yes')
        }.should change(UpdateWayAttributeJob, :count).by(1)
      end

      it "should not create an UpdateWheelchairJob if params missing" do
        lambda {
          put(:update_wheelchair, :id => 1234, :wheelchair => '')
        }.should change(UpdateWayAttributeJob, :count).by(0)
        response.code.should == '406'
        response.body.should == "Params missing"
      end
    end
  end

end
