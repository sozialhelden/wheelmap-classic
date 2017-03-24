module PopupHelper
  def render_street(node)
    if node.tags['addr:street']
      I18n.t('node.address.street', street: node.tags['addr:street'], housenumber: node.tags['addr:housenumber']).strip
    end
  end

  def render_city(node)
    if node.tags['addr:city']
      I18n.t('node.address.city', postcode: node.tags['addr:postcode'], city: node.tags['addr:city']).strip
    end
  end

  def render_attribute_list(_node)
    html = ''
    unless (attribute_string = [render_phone_popup(self), render_website_popup(self)].compact.join(' ')).blank?
      html << '<dl>'
      html << attribute_string
      html << '</dl>'
    end
    html
  end

  def render_religion_popup(node)
    if (religion = node.tags['religion'])
      popupHTMLTag(I18n.t('node.tags.religion'), religion)
    end
  end

  def render_phone_popup(node)
    if (phone = node.tags['phone'])
      popupHTMLTag(I18n.t('node.tags.phone'), phone)
    end
  end

  def render_website_popup(node)
    if (website = node.tags['website'])
      popupHTMLTag(I18n.t('node.tags.website'), "<a href='#{website}'>#{website}</a>")
    end
  end

  def popupHTMLTag(key, value)
    html = ''
    html << content_tag(:dt, key)
    html << content_tag(:dd, value)
    html
  end
end
