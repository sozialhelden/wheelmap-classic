require 'spec_helper'

describe Api::NodeTypesController do

  render_views

  before :all do
    User.delete_all
    @user = FactoryGirl.create(:user)
  end

  describe 'index action' do

    before :each do
      @category = FactoryGirl.create(:category)
      FactoryGirl.create(:category, :identifier => 'education')
      @node_type = FactoryGirl.create(:node_type, :category => @category)
      @categories = Category.all
      @categories.should_not be_empty
    end

    describe 'format json' do

      it "should render json when using accept header" do
        request.env['HTTP_ACCEPT'] = 'application/json'
        get(:index, :api_key => @user.authentication_token)
        response.should be_success
        request.format.to_sym.should eql(:json)
      end

      it "should render json as default format" do
        get(:index, :api_key => @user.authentication_token)
        response.should be_success
        request.format.to_sym.should eql(:json)
      end
    end
  end
end
