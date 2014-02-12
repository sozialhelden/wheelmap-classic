class CategoriesController < ApplicationController
  inherit_resources

  actions :index

  def index
    index! do |format|
      format.json { render json: { categories: @categories.as_api_response(:ember) }.to_json }
    end
  end
end
