require 'spec_helper'

describe Api::CategoriesController do

  render_views

  before :all do
    User.delete_all
    @user = Factory.create(:user)
  end

  describe 'index action' do

    before :each do
      @category = Factory.create(:category)
      Factory.create(:category, :identifier => 'education')
      @node_type = Factory.create(:node_type, :category => @category)
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

    describe 'format xml' do

      before :each do
        request.env['HTTP_ACCEPT'] = 'application/xml'
      end

      it "should render xml when using accept header" do
        get(:index, :api_key => @user.authentication_token)
        response.should be_success
        request.format.to_sym.should eql(:xml)
      end

    end
  end
end
