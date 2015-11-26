class Api::CounterController < Api::ApiController

  actions :index

  def index
    respond_to do |wants|
      wants.json { render :json => counts }
    end
  end

  private

  # footer widget entry counts
  def counts
    {
      :tagged => Poi.tagged.count,
      :fully_accessible => Poi.fully_accessible.count,
      :limited_accessible => Poi.limited_accessible.count,
      :not_accessible => Poi.not_accessible.count
    }
  end
end
