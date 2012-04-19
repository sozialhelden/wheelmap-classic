# require 'spec_helper'
#
# describe OauthController do
#   include Devise::TestHelpers
#
#   before(:each) do
#     User.destroy_all
#     @user = Factory.create(:user, :email => 'email@wheelmap.org',
#                                           :password => 'password',
#                                           :password_confirmation => 'password',
#                                           :oauth_token => 'a_token',
#                                           :oauth_secret => 'a_secret')
#     sign_in @user
#   end
#
#   it "should do redirect to the OSM authorization page" do
#     stub_request(:post, "#{OpenStreetMapConfig.oauth_site}/oauth/request_token").
#       to_return(:status => 200, :body => "oauth_token=ab3cd9j4ks73hf7g&oauth_token_secret=xyz4992k83j47x0b", :headers => {})
#     get :new
#     response.should be_redirect
#     response.should redirect_to("#{OpenStreetMapConfig.oauth_site}/oauth/authorize?oauth_token=ab3cd9j4ks73hf7g")
#   end
#
#   context "omniauth callback with user details forbidden" do
#     before do
#       stub_request(:get, "http://api06.dev.openstreetmap.org/api/0.6/user/details").
#         to_return(:body => 'Forbidden', :status => 403, :headers => { 'Content-Type' => "text/plain" })
#     end
#
#     it "won't fail if the users osm_id can not be retrieved" do
#       controller.current_user.stub!(:set_oauth_credentials)
#       controller.current_user.should_not_receive(:update_attributes)
#       lambda {
#         get :callback, :oauth_verifier => "irgendwas"
#       }.should_not raise_error
#     end
#
#   end
#
#
#   context "omniauth callback with user details allowed" do
#     before do
#       stub_request(:get, "http://api06.dev.openstreetmap.org/api/0.6/user/details").to_return(:body => USER_XML,
#         :status => 200, :headers => { 'Content-Type' => "application/xml" })
#     end
#
#     it "stores the users' osm_credentials" do
#       controller.current_user.should_receive(:set_oauth_credentials).with("irgendwas")
#       get :callback, :oauth_verifier => "irgendwas"
#     end
#
#     it "stores the users osm id if unset" do
#       controller.current_user.osm_id = nil
#       controller.current_user.stub!(:set_oauth_credentials)
#
#       get :callback, :oauth_verifier => "irgendwas"
#       controller.current_user.osm_id.should == 605
#     end
#
#     it "does not store the users osm id if already set" do
#       controller.current_user.osm_id = 605
#       controller.current_user.should_receive(:set_oauth_credentials).with("irgendwas")
#       controller.current_user.should_not_receive(:update_osm_id)
#
#       get :callback, :oauth_verifier => "irgendwas"
#     end
#
#     USER_XML = <<-EOX
#           <osm generator="OpenStreetMap server" version="0.6">
#           <user account_created="2012-02-08T13:29:09Z" id="605" display_name="freundchen">
#           <description/>
#           <contributor-terms pd="false" agreed="true"/>
#           <languages>
#           <lang>de-DE</lang>
#           <lang>de</lang>
#           <lang>en-US</lang>
#           <lang>en</lang>
#           </languages>
#           </user>
#           </osm>
#           EOX
#
#
#   end
# end