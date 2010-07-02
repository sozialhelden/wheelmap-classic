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
    url_for(:path => url.path, :subdomain => subdomain)
  end
end
