require 'rails_helper'

describe Api::CategoriesController do

  render_views

  let :user do
    FactoryGirl.create(:user)
  end

  before :all do
    User.delete_all
  end

  describe 'index action' do

    before :each do
      @category = FactoryGirl.create(:category)
      FactoryGirl.create(:category, :identifier => 'education')
      @node_type = FactoryGirl.create(:node_type, :category => @category)
      @categories = Category.all
      expect(@categories).not_to be_empty
    end

    describe 'format json' do

      it "should render json when using accept header" do
        request.env['HTTP_ACCEPT'] = 'application/json'
        get(:index, :api_key => user.authentication_token)
        expect(response).to be_success
        expect(request.format.to_sym).to eql(:json)
      end

      it "should render json as default format" do
        get(:index, :api_key => user.authentication_token)
        expect(response).to be_success
        expect(request.format.to_sym).to eql(:json)
      end
    end

    describe 'format xml' do

      before :each do
        request.env['HTTP_ACCEPT'] = 'application/xml'
      end

      it "should render xml when using accept header" do
        get(:index, :api_key => user.authentication_token)
        expect(response).to be_success
        expect(request.format.to_sym).to eql(:xml)
      end

    end
  end
end
