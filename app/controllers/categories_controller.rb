class CategoriesController < ApplicationController
  inherit_resources

  actions :show

  def index
    @categories = Category.all
    @node_types = @categories.map(&:node_types).flatten.uniq
    respond_to do |format|
      format.json {
        render json: {
          categories: @categories.as_api_response(:ember),
          node_types: @node_types.as_api_response(:ember)
        }
      }
    end
  end

  def show
    show! do |format|
      format.json {
        render json: {
          category: @category.as_api_response(:ember),
          node_types: @category.node_types.as_api_response(:ember)
        }
      }
    end
  end
end
