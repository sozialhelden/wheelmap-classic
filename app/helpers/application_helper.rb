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
  
  def url_for_subdomain(url, subdomain)
    url = URI.parse(url)
    host = url.host
    case host.split('.').size
    when 2
      url.host = "#{subdomain}.#{host}"
    when 3
      url.host = host.gsub(/^\w+\./,"#{subdomain}.")
    end
    url.to_s
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
    html
  end
end
