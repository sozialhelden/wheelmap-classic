class RegionsController < ApplicationController
# inherit_resources

  layout 'home'

  has_scope :depth, :default => 1, :only => :index

  # If no param is set, default to PER_PAGE
  before_filter :set_default_depth

  def index
    # @regions = collection
  end

  def show
    # @region = resource
  end


  protected

  def set_default_depth
    @depth ||= params[:depth] || 1
  end

end
