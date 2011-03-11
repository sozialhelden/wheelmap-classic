# Methods added to this helper will be available to all templates in the application.
module ApplicationHelper
  
  def category_for_node(type)
    Amenities.each do |category, groups|
      groups.each do |group|
        return category if group.keys.include?(type.to_sym)
      end
    end
    nil
  end

  def url_for_locale(url, locale)
    uri = URI.parse(url)
    case uri.path
      when '/'
        if locale.to_sym == I18n.default_locale.to_sym
          uri.path = '/'
        else
          uri.path = "/#{locale}/"
        end
      else
        if locale.to_sym == I18n.default_locale.to_sym
          uri.path = uri.path.gsub(/^\/\w{2}(-\w{2})?($|\/)/, "/")
        else
          uri.path = uri.path.gsub(/^\/\w{2}(-\w{2})?($|\/)/, "/#{locale}/")
        end
    end
    uri
  end
  
  def show_flash
    html = ''
    [:notice,:error,:alert].each do |type|
      unless flash[type].blank?
        html << "<div id='#{type}' class='flash'>"
        html << flash[type]
        html << "<a data='hide' href='#'>x</a>"
        html << "</div>"
      end 
    end
    html.html_safe
  end
end
