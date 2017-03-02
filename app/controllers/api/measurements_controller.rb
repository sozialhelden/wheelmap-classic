class Api::MeasurementsController < Api::ApiController
  rescue_from ActiveRecord::RecordNotFound, with: :render_404

  rescue_from ActionController::UnpermittedValue do |e|
    respond_to do |wants|
      wants.json { render json: { error: "Param #{e.key} must be one of the following values: #{e.allowed_values.inspect}" }.to_json, status: 406 }
      wants.xml {  render xml: { error: "Param #{e.key} must be one of the following values: #{e.allowed_values.inspect}" }.to_xml, status: 406 }
    end
  end

  resource_description do
    short 'Measurements. Provided by Google Project Tango enabled devices'
    error code: 401, desc: 'Authorization Required', meta: { message: "Authentication failed or was not provided. Verify that you have sent valid credentials via an api_key parameter. A 'www-Authenticate' challenge header will be sent with this type of error response." }
    formats ['json']
    param :api_key, String, desc: 'Your personal API key. Sign up for an account at http://wheelmap.org/users/sign_in', required: true
  end

  def_param_group :data do
    param :height, Float
    param :angle, Float
    param :area, Float
    param :width, Float
  end

  def_param_group :measurement do
    param :type, String, required: true, desc: 'The measurement type. Can be door, toilet, step or ramp'
    param :description, String, required: false, desc: 'Measurement description'
    param_group :data
  end

  def create
    if params.fetch(:photo, nil).nil?
      return respond_to do |format|
        format.json { render json: { error: 'photo is missing' }.to_json, status: 400 }
      end
    end

    poi = Poi.find(params[:node_id])
    photo = poi.photos.build(image: params[:photo])
    photo.user = current_user

    poi.save

    respond_to do |format|
      format.json { render json: { id: photo.id }.to_json, status: 201 }
    end
  end

  api :POST, 'nodes/:node_id/measurements/:measurement_id/metadata', 'Add metadata for a certain measurement image'
  param_group :measurement
  def add_metadata
    poi = Poi.find(params[:node_id])
    measurement = Measurement.new(measurement_params)
    measurement.datapoints << datapoints_from_params
    photo = poi.photos.find(params[:measurement_id])
    photo.measurements << measurement
    if photo.save
      respond_to do |format|
        format.json { render json: {}.to_json, status: 201 }
      end
    else
      respond_to do |format|
        format.json { render json: { errors: photo.errors }.to_json, status: 422 }
      end
    end
  end

  private

  def render_404
    render_exception(StandardError.new('Not found'), 404)
  end

  def data_params
    params.require(:metadata).permit(data: [:width, :length, :area, :angle, :height])
  end

  def datapoints_from_params
    metadata = data_params.fetch('data', {})
    properties = metadata.keys
    properties.map do |property|
      Datapoint.from_params(property => metadata[property])
    end
  end

  def measurement_params
    params.require(:metadata).permit(:data_type, :description)
  end
end
