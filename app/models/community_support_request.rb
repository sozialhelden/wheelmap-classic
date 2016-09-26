class CommunitySupportRequest
  include ActiveModel::Validations
  attr_accessor :name, :email, :message

  validates_presence_of :name, :email, :message
  validates :email, format: { with: /@/ }

  def initialize(name, email, message, user_agent)
    @name = name
    @email = email
    @message = message
    @user_agent = UserAgent.parse(user_agent)
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
end
