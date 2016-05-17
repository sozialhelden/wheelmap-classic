require 'acts_as_api'
class Asset

  Asset.extend ActsAsApi::Base

  include ActionView::Helpers::TagHelper
  include ActionView::Helpers::UrlHelper
  include ActionView::Helpers::AssetTagHelper


  attr_accessor :id, :name

  acts_as_api

  # @TODO Move to controller layer
  def around_api_response(api_template)
    custom_cache_key = "api_response_#{self.cache_key}_#{api_template.to_s}"
    Rails.cache.fetch(custom_cache_key, :expires_in => 1.day) do
      yield
    end
  end

  api_accessible :simple do |template|
    template.add :id
    template.add :name
    template.add :modified_at
    template.add :license
    template.add :url
  end

  def initialize(attribs={})
    attribs.each do |key, value|
      self.send("#{key}=", value)
    end
  end

  def url
    # @TODO use image_url when we moved to Rails 4
    asset_paths.compute_public_path("/#{name}.zip", 'images', { protocol: :https })
  end

  def file_name
    Rails.root.join('public', "#{name}.zip")
  end

  def modified_at
    File.mtime(file_name).to_i
  end

  def license
    "cc-by-sa"
  end

  def as_json(options={})
    {
      :type => name,
      :url => url,
      :license => "cc-by-sa",
      :modified_at => modified_at.to_i
    }
  end

  def config
  end

  def cache_key
    "assets/#{name}"
  end

  # Dummy methods to generate full image paths
  def config
    Wheelmap::Application.config.action_controller
  end


  # Dummy methods to generate full image paths
  def controller
    ''
  end


end
