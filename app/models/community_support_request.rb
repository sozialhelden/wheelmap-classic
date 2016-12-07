class CommunitySupportRequest
  include ActiveModel::Validations
  attr_accessor :name, :email, :message, :osm_username, :is_logged_in,
    :last_zoom_level, :latitude, :longitude, :wheelchair_status_filters, :category_filters, :toilet_filters

  validates_presence_of :name, :email, :message
  validates :email, format: { with: /@/ }

  def initialize(params = {})
    @name = params.fetch(:name, '')
    @email = params.fetch(:email, '')
    @message = params.fetch(:message, '')
    @user_agent = UserAgent.parse(params.fetch(:user_agent, ''))
    @last_zoom_level = value_or_not_available(params.fetch(:last_zoom_level, nil))
    @latitude = value_or_not_available(params.fetch(:latitude, nil))
    @longitude = value_or_not_available(params.fetch(:longitude, nil))
    @wheelchair_status_filters = localize_status_filters(params.fetch(:wheelchair_status_filters, nil))
    @category_filters = value_or_all_active(params.fetch(:category_filters, nil))
    @toilet_filters = localize_status_filters(params.fetch(:toilet_filters, nil))
  end

  def browser_vendor
    @user_agent.browser
  end

  def operating_system
    @user_agent.platform
  end

  def operating_system_version
    @user_agent.os
  end

  def browser_version
    @user_agent.version
  end

  def to_key
    nil
  end

  private

  def value_or_not_available(value)
    if value
      value
    else
      'N/A'
    end
  end

  def value_or_all_active(filters)
    if filters
      filters
    else
      ["Alle aktiv"]
    end
  end

  def localize_status_filters(filters)
    return ['Alle aktiviert'] if filters.nil?

    return ['Keine aktiv'] if filters.length == 0

    filters.map do |filter|
      case filter.downcase
      when 'yes'
        'Rollstuhlgerecht'
      when 'no'
        'Nicht rollstuhlgerecht'
      when 'limited'
        'Teilweise rollstuhlgerecht'
      else
        'Unbekannt'
      end
    end
  end
end
