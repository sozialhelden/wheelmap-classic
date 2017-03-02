class Api::PhotosController < Api::ApiController
  require 'active_resource/exceptions'

  belongs_to :user, optional: true, singleton: true
  belongs_to :node, optional: true, parent_class: Poi

  actions :index, :create, :destroy

  defaults resource_class: Photo, collection_name: 'photos'

  rescue_from ActiveRecord::RecordNotFound, with: :render_403

  before_filter :require_owner, only: :destroy

  def index
    @photos = collection
    respond_to do |format|
      format.xml      { render_for_api :simple, xml: @photos, root: :photos, meta: meta }
      format.json     { render_for_api :simple, json: @photos, root: :photos, meta: meta }
    end
  end

  def create
    @photo = parent.photos.build(image: params[:photo])
    @photo.user = current_user
    create! do |success, failure|
      success.json { render json: { message: 'OK' }.to_json, status: 201 }
      failure.json { render json: { error: @photo.errors }.to_json, status: 400 }

      success.xml {  render xml: { message: 'OK' }.to_xml, status: 201 }
      failure.xml {  render xml: { error: @photo.errors }.to_xml, status: 400 }
    end
  end

  def destroy
    @photo = resource
    destroy! do |success, failure|
      success.json { render json: { message: 'OK' }.to_json, status: 200 }
      failure.json { render json: { error: @photo.errors }.to_json, status: 403 }

      success.xml {  render xml: { message: 'OK' }.to_xml, status: 200 }
      failure.xml {  render xml: { error: @photo.errors }.to_xml, status: 403 }
    end
  end

  protected

  def parent
    @parent ||= if params[:node_id]
                  Poi.find(params[:node_id])
                else
                  current_user
                end
  end

  def collection
    @photos ||= parent.photos.paginate(page: params[:page], per_page: params[:per_page])
  end

  def resource
    @photo ||= parent.photos.find(params[:id])
  end

  def render_403
    Rails.logger.error '403'
    render_exception(StandardError.new('Forbidden'), 403)
  end

  def require_owner
    unless resource.user_id == current_user.id
      Rails.logger.warn("User #{current_user.id} is not owner of Photo #{resource.id}!!!")
      render_403
    end
  end
end
