class NodeTypesController < ApplicationController
  inherit_resources

  actions :show

  def show
    show! do |format|
      format.json { render json: { node_type: @node_type.as_api_response(:ember) }.to_json }
    end
  end
end
