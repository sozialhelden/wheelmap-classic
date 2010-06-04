class NodesController < ApplicationController
  
  def show
    @node = OpenStreetMap.get_node(params[:id])
  end
end