class LandingPagesController < ApplicationController

  layout 'legacy'

  before_filter :load_region, :load_status, :load_type

  def index
    @nodes = @node_type.pois.including_category.with_status(@status).within_region(@region).paginate(:page => params[:page], :per_page => 10)
  end

  protected

  def load_region
    @region = Region.find params[:region_id] rescue nil
    @message = "Could not find region #{params[:region_id]}"
    render :template => 'shared/error', :status => 400 unless @region
  end

  def load_status
    @status = Poi::WHEELCHAIR_STATUS_VALUES[params[:wheelchair].to_sym]
    @message = "Could not find status #{params[:wheelchair]}"
    render :template => 'shared/error', :status => 400 unless @status
  end

  def load_type
    @node_type = NodeType.find_by_identifier(params[:node_type_id])
    @message = "Could not find type #{params[:node_type_id]}"
    render :template => 'shared/error', :status => 400 unless @node_type
  end

end
