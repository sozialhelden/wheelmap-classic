class Api::LocalesController < Api::ApiController
  def index
    index! do |format|
      format.xml      { render xml: meta.update(locales: @locales) }
      format.json     { render json: meta.update(locales: @locales) }
    end
  end

  protected

  def collection
    @locales ||= I18n.available_locales.each_with_object({}) { |l, memo| memo[l] = Languages[l.to_s]; }
  end

  def meta
    @meta ||= {
      conditions: {
        format: params[:format]
      },
      meta: {
        item_count_total: collection.size,
        item_count: collection.size
      }
    }
  end
end
