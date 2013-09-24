module NodesHelper

  WHEELCHAIR_ACCESIBILITY = {'yes' => 'fully_accessible', 'limited' => 'limited_accessible', 'no' => 'not_accessible', 'unknown' => 'unknown_accessibility'}

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

  def accesibility(node)
    WHEELCHAIR_ACCESIBILITY[node.wheelchair]
  end

  def render_address(node)
    if node.address?
      content_tag :address, node.address
    end
  end
end
