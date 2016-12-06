class CommunitySupportRequest
  include ActiveModel::Validations
  attr_accessor :name, :email, :message, :osm_username, :is_logged_in,
    :last_zoom_level, :latitude, :longitude, :status_filters

  validates_presence_of :name, :email, :message
  validates :email, format: { with: /@/ }

  def initialize(params = {})
    @name = params.fetch(:name, '')
    @email = params.fetch(:email, '')
    @message = params.fetch(:message, '')
    @user_agent = UserAgent.parse(params.fetch(:user_agent, ''))
    @last_zoom_level = params.fetch(:last_zoom_level, nil) || 'N/A'
    @latitude = params.fetch(:latitude, nil) || 'N/A'
    @longitude = params.fetch(:longitude, nil) || 'N/A'
    @status_filters = localize_status_filters(params.fetch(:status_filters, nil))
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

  def localize_status_filters(filters)
    return 'Alle aktiviert' if filters.nil?

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
    end.join(', ')
  end
end
