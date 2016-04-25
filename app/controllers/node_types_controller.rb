class NodeTypesController < ApplicationController
  def index
    if params[:ids]
      @node_types ||= NodeType.where(id: params[:ids])
    else
      @node_types = NodeType.all
    end

    respond_to do |format|
      format.html
      format.json {
        render json: {
            node_types: @node_types.as_api_response(:ember)
        }
      }
    end
  end

  def show
    node_type = NodeType.find(params[:id])
    respond_to do |format|
      format.json { render json: { node_type: node_type.as_api_response(:ember) }.to_json }
    end
  end
end
