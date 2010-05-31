require 'spec_helper'

describe OauthController do
  
  describe "action: new" do
    
    it "should redirect user to login page" do
      
    end
    it "should redirect to authorize page" do
      oauth_request = mock(
          :token => '1984',
          :secret => '1999',
          :authorize_url => 'http://www.openstreetmap.org/oauth/authorize?oauth_token=42'
        )
      consumer = OAuth::Consumer.new('753', '23', { :site => 'http://www.openstreetmap.org' })
      consumer.expects(:get_request_token).with(:oauth_callback => root_url).returns(oauth_request)
      get :new
      response.should redirect_to "http://www.openstreetmap.org/oauth/authorize?oauth_token=42"
    end
  end
  
  describe "action: callback" do
    
  end
  
  describe "action: osm_register" do
  end
  
  it 'should redirect to OpenStreetMap' do
    oauth_request = mock(
        :token => '1984',
        :secret => '1999',
        :authorize_url => 'http://www.openstreetmap.org/oauth/authorize?oauth_token=42'
      )
    consumer = OAuth::Consumer.new('753', '23', { :site => 'http://www.openstreetmap.org' })
    consumer.expects(:get_request_token).with(:oauth_callback => root_url).returns(oauth_request)
    OAuth::Consumer.expects(:new).returns(consumer)
    
    get :new
    
    session[:token].should == '1984'
    session[:secret].should == '1999'
    response.should redirect_to 'http://www.openstreetmap.org/oauth/authorize?oauth_token=42'
  end
  
  it 'should get the callback' do
    get :callback, :oauth_token => '4711'
    
    session[:username].should == 'homer'
    flash[:notice].should_not be_empty
    response.should redirect_to root_url
  end

end
