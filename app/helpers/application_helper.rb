# Methods added to this helper will be available to all templates in the application.
module ApplicationHelper

  # Renders OpenGraph Meta tags for the given option to help facebook parse the website.
  def render_og_metadata(options = {})
    html = ''
    options.reverse_merge({
      :site_name => 'wheelmap.org'
    }).reject{|key,value|
      value.blank?
    }.each{|key, value|
      html << tag(:meta, :property => "og:#{key}", :content => value) + "\n"
    }
    html << tag(:meta, :property => "fb:app_id", :content => '289221174426029')
    html.html_safe
  end

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
    # Ommit leading locale for default locale
    if uri.path =~ /^\/$/ # /
      uri.path = "/#{locale}/"
    elsif uri.path =~ /^\/\w{2}(-\w{2})?($|\/)/ #/pt-TR/
      uri.path = uri.path.gsub(/^\/\w{2}(-\w{2})?($|\/)/, "/#{locale}/")
    else
      uri.path = uri.path.gsub(/^(.+?)$/, "/#{locale}" + '\1')
    end
    # remove trailing slash
    uri.path = uri.path.gsub(/\/$/,'')
    uri
  end

  def show_flash
    html = ''
    [:notice,:error,:alert].each do |type|
      unless flash[type].blank?
        html << "<div id='#{type}' class='flash'>"
        html << flash[type]
        html << "<a data='hide' href='#'>&times;</a>"
        html << "</div>"
      end
    end
    html.html_safe
  end
end
