class CommunitySupportRequest
  include ActiveModel::Validations
  attr_accessor :name, :email

  validates_presence_of :name, :email

  def initialize(name, email, message)
    @name = name
    @email = email
    @message = message
  end
end
