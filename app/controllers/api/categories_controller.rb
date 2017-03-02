class Api::CategoriesController < Api::ApiController
  actions :index, :show

  defaults resource_class: Category, collection_name: 'categories'
  def index
    index! do |format|
      format.xml      { render_for_api :simple, xml: @categories, root: :categories, meta: meta }
      format.json     { render_for_api :simple, json: @categories, root: :categories, meta: meta }
    end
  end

  def show
    show! do |format|
      format.xml      { render_for_api :simple, xml: @category, root: :category }
      format.json     { render_for_api :simple, json: @category, root: :category }
    end
  end

  protected

  def collection
    @categories ||= end_of_association_chain.paginate(page: params[:page], per_page: params[:per_page])
  end

  def meta
    @meta = {
      conditions: {
        page: params[:page],
        per_page: params[:per_page],
        format: params[:format],
        locale: params[:locale]
      },
      meta: {
        page: params[:page],
        num_pages: collection.total_pages,
        item_count_total: collection.total_entries,
        item_count: collection.compact.size
      }
    }
  end
end
