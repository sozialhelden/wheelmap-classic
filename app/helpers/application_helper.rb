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

  def link_to_participate
    if I18n.locale == :de
      link_to( t('how?'), "http://blog.wheelmap.org/mitmachen", :target => '_blank')
    else
      link_to( t('how?'), "http://blog.wheelmap.org/en/participate", :target => '_blank')
    end
  end

  def category_for_node(type)
    Amenities.each do |category, groups|
      groups.each do |group|
        return category if group.keys.include?(type.to_sym)
      end
    end
    nil
  end

  def var_language
    "var language = \"#{I18n.locale.to_s.gsub(/(-[a-z]{2})/){ $1.upcase unless $1.nil?}}\""
  end

  def url_for_locale(url, locale)
    uri = URI.parse(url)
    # Ommit leading locale for default locale
    if uri.path =~ /^\/$/ # /
      uri.path = "/#{locale}/"
    elsif uri.path =~ /^\/tlh($|\/)/
      uri.path = uri.path.gsub(/^\/tlh($|\/)/, "/#{locale}/")
    elsif uri.path =~ /^\/[a-z]{2}(-[a-zA-Z]{2})?($|\/)/ #/pt-TR/
      uri.path = uri.path.gsub(/^\/\w{2}(-\w{2})?($|\/)/, "/#{locale}/")
    else
      uri.path = uri.path.gsub(/^(.+?)$/, "/#{locale}" + '\1')
    end
    # remove trailing slash
    uri.path = uri.path.gsub(/\/$/,'')
    uri
  end

  # Flash message for new layout.
  def render_flash
    html = ''
    [:notice,:error,:alert].each do |type|
      unless flash[type].blank?
        html << "<div class='notification active #{type}'>"
        html << "<span>"
        html << flash[type]
        html << "</span></div>"
      end
    end
    html.html_safe
  end

  # Flash message for old layout.
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

  def community_press_url
    if I18n.locale == :de
      "http://community.wheelmap.org/about/presse/"
    else
      "http://community.wheelmap.org/en/about/press/"
    end
  end

  def community_contact_url
    if I18n.locale == :de
      "http://community.wheelmap.org/kontakt/"
    else
      "http://community.wheelmap.org/en/contact/"
    end
  end

  def community_projects_url
    if I18n.locale == :de
      "http://community.wheelmap.org/projekte/"
    else
      "http://community.wheelmap.org/en/get-engaged/"
    end
  end

  def community_imprint_url
    if I18n.locale == :de
      "http://community.wheelmap.org/impressum/"
    else
      "http://community.wheelmap.org/en/imprint/"
    end
  end

  def community_about_url
    if I18n.locale == :de
      "http://community.wheelmap.org/about/"
    else
      "http://community.wheelmap.org/en/about/"
    end
  end

  def community_newsletter_url
    if I18n.locale == :de
      "http://community.wheelmap.org/newsletter/"
    else
      "http://community.wheelmap.org/newsletter-2/"
    end
  end
end
