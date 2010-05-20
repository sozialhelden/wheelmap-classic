class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :http_authenticatable, :token_authenticatable, :database_authenticatable, :confirmable, :lockable, :timeoutable and :activatable
  devise :database_authenticatable, :recoverable, :registerable, :rememberable, :trackable, :validatable

  # Setup accessible (or protected) attributes for your model
  attr_accessible :email, :password, :password_confirmation
  validates_uniqueness_of :email, :case_sensitive => false
  validates_presence_of :email
end
