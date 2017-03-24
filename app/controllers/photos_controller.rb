class PhotosController < ApplicationController
  # Include Inherited Resources behaviour
  inherit_resources

  actions :index, :create, :destroy, :show

  optional_belongs_to :node, parent_class: Poi
  optional_belongs_to :user

  before_filter :authenticate_user!

  before_filter :require_owner, only: :destroy

  def create
    @photo = Photo.new(params[:photo])
    @photo.poi = Poi.find(params[:node_id])
    @photo.user = current_user
    @photo.save!

    respond_to do |wants|
      wants.json { render status: 200, json: { url: @photo.image.url } }
      wants.html { redirect_to node_path(@photo.poi) }
    end
  end

  def destroy
    destroy! do |fmt|
      back_url = request.referer || profile_photo_path
      fmt.html { redirect_to back_url }
    end
  end

  def index
    photos = Photo.find(params[:ids])

    respond_to do |format|
      format.json { render json: { photos: photos.as_api_response(:ember) } }
    end
  end

  def show
    show! do |format|
      format.json { render json: { photo: resource.as_api_response(:ember) } }
    end
  end

  protected

  def require_owner
    @photo = resource
    if @photo.user != current_user
      @message = I18n.t('nodes.errors.not_authorized')
      render template: 'shared/error', status: 403
    end
  end
end
