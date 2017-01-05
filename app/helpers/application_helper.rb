# Methods added to this helper will be available to all templates in the application.
module ApplicationHelper

  def close_button
    content_tag(:button, '×', class: :close)
  end

  # Renders OpenGraph Meta tags for the given option to help facebook parse the website.
  def render_og_metadata(options = {})
    html = ''
    options.reverse_merge({
      :site_name => 'Wheelmap.org',
      :type => 'website',
      :url => request.url
    }).reject{|key,value|
      value.blank?
    }.each{|key, value|
      if value.is_a? Array
        value.each do |element|
          html << tag(:meta, :property => "og:#{key}", :content => element) + "\n"
        end
      else
        html << tag(:meta, :property => "og:#{key}", :content => value) + "\n"
      end
    }
    html << tag(:meta, :property => "fb:app_id", :content => '289221174426029')
    html << tag(:meta, :property => "fb:admins", :content => '534621246')
    html.html_safe
  end

  def render_og_locationdata(options = {})
    html = ''
    options.reject{|key,value|
      value.blank?
    }.each do |key, value|
      html << tag(:meta, :property => "place:location:#{key}", :content => value) + "\n"
    end
    html.html_safe
  end

  def render_twitter_metadata(options = {})
    html = ''

    options.each do |key, value|
      html << tag(:meta, name: "twitter:#{key}", content: value) + "\n"
    end

    html.html_safe
  end

  def link_to_participate
    if I18n.locale == :de
      link_to( t('how?'), "//news.wheelmap.org/wheelmap-botschafter/", :target => '_blank')
    else
      link_to( t('how?'), "//news.wheelmap.org/en/wheelmap-ambassador/", :target => '_blank')
    end
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
    [:notice,:error,:alert, :success].each do |type|
      html << "<div class='notification #{type}' id='#{type}_div_id' style='display:none'><span>#{flash[type]}</span></div>"
    end
    html.html_safe
  end

  # Flash message for old layout.
  def show_flash
    html = ''
    [:notice,:error,:alert].each do |type|
      html << "<div id=\"#{type}\" class=\"flash\" style=\"display:none;\"><a data=\"hide\" href=\"#\">&times;</a></div>"
    end
    html.html_safe
  end

  def community_blog_url
    if I18n.locale == :de
      "//news.wheelmap.org/#news"
    else
      "//news.wheelmap.org/en/#news"
    end
  end

  def community_press_url
    if I18n.locale == :de
      "//news.wheelmap.org/presse/"
    else
      "//news.wheelmap.org/en/press/"
    end
  end

  def community_contact_url
    if I18n.locale == :de
      "//news.wheelmap.org/kontakt/"
    else
      "//news.wheelmap.org/en/contact/"
    end
  end

  def community_projects_url
    if I18n.locale == :de
      "//news.wheelmap.org/wheelmap-botschafter/"
    else
      "//news.wheelmap.org/en/wheelmap-ambassador/"
    end
  end

  def community_imprint_url
    if I18n.locale == :de
      "//news.wheelmap.org/impressum/"
    else
      "//news.wheelmap.org/en/imprint/"
    end
  end

  def community_newsletter_url
    if I18n.locale == :de
      "//news.wheelmap.org/kontakt/"
    else
      "//news.wheelmap.org/contact/"
    end
  end

  def community_faq_url
    if I18n.locale == :de
      "//news.wheelmap.org/faq/"
    else
      "//news.wheelmap.org/en/faq/"
    end
  end

  def community_travelguide_url
     "http://travelable.info/"
  end

  def mailme_to(email_address, name = nil, html_options = {}, &block)

    raise "mailme_to: Use native mail_to method with Rails 4.0 and later." if Rails.version.starts_with?("4.")

    email_address = ERB::Util.html_escape(email_address)

    html_options, name = name, nil if block_given?
    html_options = (html_options || {}).stringify_keys

    extras = %w{ cc bcc body subject }.map { |item|
     option = html_options.delete(item) || next
     "#{item}=#{Rack::Utils.escape_path(option)}"
    }.compact
    extras = extras.empty? ? '' : '?' + ERB::Util.html_escape(extras.join('&'))

    html_options["href"] = "mailto:#{email_address}#{extras}".html_safe

    content_tag(:a, name || email_address.html_safe, html_options, &block)
  end

  # TODO Can be removed with Rails 4
  def cache_if(condition, name = {}, options = nil, &block)
    if condition
      cache(name, options, &block)
    else
      yield
    end

    nil
  end

  def christmas?
    (Time.parse('1st December').to_i..Time.parse('27st December').to_i) === Time.now.to_i
  end

end
