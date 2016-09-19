class CommunitySupportRequest
  include ActiveModel::Validations
  attr_accessor :name, :email, :message

  validates_presence_of :name, :email, :message
  validates :email, format: { with: /@/ }

  def initialize(name, email, message)
    @name = name
    @email = email
    @message = message
  end
end
