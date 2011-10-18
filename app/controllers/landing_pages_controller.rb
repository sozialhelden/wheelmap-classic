class LandingPagesController < ApplicationController
  include InheritedResources::DSL

  layout 'nodes'

  before_filter :load_region, :load_status, :load_type

  def index
    @nodes = @node_type.pois.including_category.with_status(@status).within_region(@region).paginate(:page => params[:page], :per_page => 100)
  end

  def load_region
    @region = Region.find params[:region_id]
  end

  def load_status
    @status = Poi::WHEELCHAIR_STATUS_VALUES[params[:wheelchair].to_sym]
  end

  def load_type
    @node_type = NodeType.find_by_identifier(params[:node_type_id])
  end

end