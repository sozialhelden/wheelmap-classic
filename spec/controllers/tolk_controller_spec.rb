require 'spec_helper'

describe Tolk::LocalesController do
  include Devise::TestHelpers
  render_views

  before :each do
    @locale = Factory.create(:locale)

    @admin = Factory.create(:admin)
    sign_in :admin, @admin
  end

  it "should be ok to go the tolk page as admin" do
    get :index
    response.code.should == '200'
    response.body.should =~ /Tolk/
  end

end