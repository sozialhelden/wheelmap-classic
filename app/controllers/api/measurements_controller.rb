class Api::MeasurementsController < Api::ApiController
  rescue_from ActiveRecord::RecordNotFound, :with => :render_404

  def create
    if params.fetch(:photo, nil) == nil
      return respond_to do |format|
        format.json { render :json => { :error => 'photo is missing' }.to_json, :status => 400 }
      end
    end

    respond_to do |format|
      format.json { render :json => {:id => 1234 }.to_json, :status => 201 }
    end
  end

  def add_metadata
    Poi.find(params[:node_id])

    respond_to do |format|
      format.json { render :json => {:id => 1234 }.to_json, :status => 201 }
    end
  end

  private

  def render_404
    render_exception(StandardError.new("Not found"), 404)
  end
end
