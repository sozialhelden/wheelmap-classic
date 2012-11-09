class PhotosController < ApplicationController

  # Include Inherited Resources behaviour
  inherit_resources

  actions :create, :destroy

  optional_belongs_to :node

  before_filter :authenticate_user!

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

end
