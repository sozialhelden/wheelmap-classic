class CategoriesController < ApplicationController
  inherit_resources

  actions :index, :show

  def index
    @node_types = collection.map(&:node_types).flatten.uniq

    index! do |format|
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
