class Api::MeasurementsController < Api::ApiController
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
end
