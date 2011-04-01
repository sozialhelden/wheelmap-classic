class Admin < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :http_authenticatable, :token_authenticatable, :database_authenticatable, :confirmable, :lockable, :timeoutable and :activatable
  devise :database_authenticatable, :recoverable, :registerable, :rememberable, :trackable, :validatable, :confirmable, :lockable, , :encryptable, :encryptor => :sha1
  # devise :registerable, :authenticatable, :recoverable,
  #        :rememberable, :trackable, :validatable

  # Setup accessible (or protected) attributes for your model
  attr_accessible :email, :password, :password_confirmation
  
  validates_format_of :email, :with => /@wheelmap.org|@sozialhelden.de$/
end
