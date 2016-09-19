class CommunitySupportRequest
  include ActiveModel::Validations

  def initialize(name, email, message)
    @name = name
    @email = email
    @message = message
  end
end
