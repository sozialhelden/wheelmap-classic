module NodesHelper

  def link_to_landing_page(link_name, region, status, type, options = {})
    link_to(link_name, url_for(:controller => 'landing_pages', :wheelchair => status, :node_type_id => type.identifier, :region_id => region.slug.name), options)
  end

  def tag_line(node, key, options = nil)
    if node.tags[key]
      itemprop = options.delete(:itemprop) if options
      label = options.try(:[], :label_key) || t("formtastic.labels.#{key}")
      content_tag(:tr) do
        content_tag(:th, label || "formtastic.labels.#{key}") +
        content_tag(:td, node.tags[key] || '&nbsp;', :itemprop => itemprop)
      end
    end
  end

  def render_address(node)
    if node.address?
      content_tag :address, node.address
    end
  end

  def options_for_wheelchair(wheelchair_status)
    stati = []
    Poi::WHEELCHAIR_STATUS_VALUES.keys.each do |wheelchairstatus|
      stati << [I18n.t("wheelchairstatus.#{wheelchairstatus}"), wheelchairstatus, class: "wheelchairstatus_#{wheelchair_status}", label: I18n.t("wheelchairstatus.#{wheelchairstatus}") ]
    end
    options_for_select(stati, wheelchair_status)
  end

  def options_for_category
    categories = []

    Category.all.each do |category|
      categories << [I18n.t("poi.category.#{category.identifier}"), category.identifier]
    end

    categories.sort_by { |_, category| category[0] }
  end

  def options_for_type
    types = []

    Category.includes(:node_types).all.each do |category|
      category.node_types.each do |node_type|
        types << [
            I18n.t("poi.name.#{category.identifier}.#{node_type.identifier}"),
            node_type.identifier,
            { :'data-category' => category.identifier }
        ]
      end
    end

    types.sort_by { |_, type| type[0] }
  end
end
