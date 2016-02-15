class NodeTypesController < ApplicationController
  inherit_resources

  actions :show

  def index
    @node_types = NodeType.all

    respond_to do |format|
      format.json {
        render json: {
            node_types: @node_types.as_api_response(:ember)
        }
      }
    end
  end

  def show
    show! do |format|
      format.json { render json: { node_type: @node_type.as_api_response(:ember) }.to_json }
    end
  end

  protected

  def collection
    if params[:ids]
      @node_types ||= NodeType.where(id: params[:ids])
    else
      super
    end
  end
end
