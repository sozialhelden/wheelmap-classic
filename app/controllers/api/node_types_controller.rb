class Api::NodeTypesController < Api::ApiController
  defaults resource_class: NodeType

  belongs_to :category, optional: true, class_name: 'Category'

  actions :index, :show

  def index
    index! do |format|
      format.xml      { render_for_api :simple, xml: @node_types, root: :node_types, meta: meta }
      format.json     { render_for_api :simple, json: @node_types, root: :node_types, meta: meta }
    end
  end

  def show
    show! do |format|
      format.xml      { render_for_api :simple, xml: @node_type, root: :node_type }
      format.json     { render_for_api :simple, json: @node_type, root: :node_type }
    end
  end

  protected

  def collection
    @node_types ||= end_of_association_chain.paginate(page: params[:page], per_page: params[:per_page])
  end

  def meta
    @meta = {
      conditions: {
        page: params[:page],
        per_page: params[:per_page],
        format: params[:format],
        locale: params[:locale] || I18n.locale
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
