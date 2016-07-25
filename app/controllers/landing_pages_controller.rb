class LandingPagesController < ApplicationController

  layout 'legacy'

  before_filter :load_region, :load_status, :load_type

  def index
    @nodes = @node_type.pois.including_category.with_status(@status).within_region(@region).paginate(:page => params[:page], :per_page => 10)
  end

  protected

  def load_region
    @region = Region.find_by!(name: params[:region_id])
  rescue ActiveRecord::RecordNotFound
    @message = "Could not find region #{params[:region_id]}"
    render :template => 'shared/error', :status => 404
  end

  def load_status
    @status = Poi::WHEELCHAIR_STATUS_VALUES[params[:wheelchair].to_sym]
    @message = "Could not find status #{params[:wheelchair]}"
    render :template => 'shared/error', :status => 404 unless @status
  end

  def load_type
    @node_type = NodeType.find_by!(identifier: params[:node_type_id])
  rescue ActiveRecord::RecordNotFound
    @message = "Could not find type #{params[:node_type_id]}"
    render :template => 'shared/error', :status => 404
  end

end
