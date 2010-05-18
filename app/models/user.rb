class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :http_authenticatable, :token_authenticatable, :confirmable, :lockable, :timeoutable and :activatable
  #devise :token_authenticatable

  # Setup accessible (or protected) attributes for your model
  #attr_accessible :email, :password, :password_confirmation
end
