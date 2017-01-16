require 'rails_helper'

describe Api::NodeTypesController do

  render_views

  before :all do
    User.delete_all
    @user = FactoryGirl.create(:user)
  end

  describe 'index action' do

    before :each do
      @category = FactoryGirl.create(:category)
      education_category = FactoryGirl.create(:category, :identifier => 'education')
      @node_type = FactoryGirl.create(:node_type, :category => @category)
      FactoryGirl.create(:node_type, :category => education_category)
      @categories = Category.all
      expect(@categories).not_to be_empty
    end

    it 'returns 200 status code' do
      get(:index, category_id: @category.id, :api_key => @user.authentication_token)
      expect(response.status).to eq 200
    end

    it 'returns node types for the specified category' do
      get(:index, category_id: @category.id, :api_key => @user.authentication_token)
      json_response = JSON.parse(response.body)
      node_types = json_response['node_types']
      category_ids = node_types.map { |node_type| node_type['category_id'] }
      expect(category_ids.all?{ |category| category == @category.id }).to be true
    end

    describe 'format json' do

      it "should render json when using accept header" do
        request.env['HTTP_ACCEPT'] = 'application/json'
        get(:index, :api_key => @user.authentication_token)
        expect(response).to be_success
        expect(request.format.to_sym).to eql(:json)
      end

      it "should render json as default format" do
        get(:index, :api_key => @user.authentication_token)
        expect(response).to be_success
        expect(request.format.to_sym).to eql(:json)
      end
    end
  end
end
