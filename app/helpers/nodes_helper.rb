module NodesHelper

  def link_to_landing_page(link_name, region, status, type, options = {})
    link_to(link_name, url_for(:controller => 'landing_pages', :wheelchair => status, :node_type_id => type.identifier, :region_id => region.slug), options)
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

  def options_for_toilet(toilet_status)
    stati = []
    Poi::WHEELCHAIR_TOILET_VALUES.keys.each do |toiletstatus|
      stati << [I18n.t("toiletstatus.#{toiletstatus}"), toiletstatus, class: "wheelchairstatus_#{toilet_status}", label: I18n.t("toiletstatus.#{toiletstatus}") ]
    end
    options_for_select(stati, toilet_status)
  end

  def tile2bbox(x, y, zoom)
    north, west = tile2latlon(x, y, zoom)
    south, east = tile2latlon(x + 1, y + 1, zoom)

    [west, north, east, south]
  end

  def tile2latlon(xtile, ytile, zoom)
    n = 2.0 ** zoom
    lon_deg = xtile / n * 360.0 - 180.0
    lat_rad = Math::atan(Math::sinh(Math::PI * (1 - 2 * ytile / n)))
    lat_deg = 180.0 * (lat_rad / Math::PI)
    [lat_deg, lon_deg]
  end
end
