class DataController < ApplicationController

  before_filter :set_session_amenities, :only => :index

  def index
    @places = Cloudmade.nodes(params[:bbox],params[:object_types])
    render :json => @places
  end

  def update
    Delayed::Job.enqueue(UpdatingJob.new(params[:id], params[:wheelchair], default_user.id))
    render :text => 'OK'
  end
  
  def set_session_amenities
    object_types = params[:object_types].split(',') if params[:object_types]
    session['amenities'] = object_types.flatten.compact.uniq unless object_types.compact.blank?
    RAILS_DEFAULT_LOGGER.warn(session['amenities'])
  end
end
