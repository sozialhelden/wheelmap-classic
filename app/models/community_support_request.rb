class CommunitySupportRequest
  include ActiveModel::Validations
  attr_accessor :name
  
  validates_presence_of :name

  def initialize(name, email, message)
    @name = name
    @email = email
    @message = message
  end
end
