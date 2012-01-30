class WaysController < ApplicationController
  inherit_resources

  actions :index, :show

  layout 'nodes'

  before_filter :check_update_wheelchair_params,  :only => :update_wheelchair
  before_filter :check_bbox_param,                :only => :index


  rescue_from ActiveRecord::RecordNotFound,     :with => :not_found
  rescue_from OpenStreetMap::NotFound,          :with => :not_found
  rescue_from OpenStreetMap::Gone,              :with => :gone
  rescue_from OpenStreetMap::Unavailable,       :with => :timeout

  def show
    @node = @way = resource
    show! do |format|
      format.html{ render :template => 'nodes/show' }
    end
  end

  def update_wheelchair
    user = wheelmap_visitor
    client = OpenStreetMap::OauthClient.new(user.access_token)
    Delayed::Job.enqueue(UpdateSingleWayAttributeJob.new(params[:id], user, client, :wheelchair => params[:wheelchair]))
    @way = Way.find(params[:id])
    respond_to do |wants|
      wants.js{ render :json => {:message => t('nodes.update_wheelchair.successfull', :status => t("wheelchairstatus.#{params[:wheelchair]}"), :name => @way.headline), :wheelchair => params[:wheelchair] }.to_json}
      wants.html{ render :text => t('nodes.update_wheelchair.successfull') }
    end
  end

end