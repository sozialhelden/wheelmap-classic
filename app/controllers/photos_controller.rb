class PhotosController < ApplicationController

  # Include Inherited Resources behaviour
  inherit_resources

  actions :create, :destroy

  optional_belongs_to :node, :parent_class => Poi

  before_filter :authenticate_user!

  before_filter :require_owner, :only => :destroy

  def create
    @photo = Photo.new(params[:photo])
    @photo.poi = Poi.find(params[:node_id])
    @photo.user = current_user
    if @photo.save
      @photo.process_image_upload = true
      render :partial => 'photo', :object => @photo
    else
      redirect_to :back
    end
  end

  def destroy
    destroy! { :back }
  end

  protected

  def require_owner
    @photo = resource
    if @photo.user != current_user
      @message = I18n.t('nodes.errors.not_authorized')
      render :template => 'shared/error', :status => 403
    end
  end

end
