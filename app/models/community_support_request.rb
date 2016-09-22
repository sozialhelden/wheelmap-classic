class CommunitySupportRequest
  include ActiveModel::Validations
  attr_accessor :name, :email, :message, :user_agent

  validates_presence_of :name, :email, :message
  validates :email, format: { with: /@/ }

  def initialize(name, email, message, user_agent)
    @name = name
    @email = email
    @message = message
    @user_agent = user_agent
  end
end
