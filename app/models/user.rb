class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :http_authenticatable, :token_authenticatable, :database_authenticatable, :confirmable, :lockable, :timeoutable and :activatable
  devise :database_authenticatable, :recoverable, :registerable, :rememberable, :trackable, :validatable

  # Setup accessible (or protected) attributes for your model
  attr_accessible :email, :password, :password_confirmation, :remember_me
  validates_uniqueness_of :email, :case_sensitive => false
  validates_presence_of :email
  
  serialize :oauth_request_token
  
  def app_authorized?
    oauth_authorized?
  end
  
  def oauth_authorized?
    !!(oauth_token && oauth_secret)
  end
    
  def access_token
    if oauth_authorized?
      consumer = OAuth::Consumer.new(OpenStreetMapConfig.oauth_key, OpenStreetMapConfig.oauth_secret, :site => OpenStreetMapConfig.oauth_site)
      access_token = OAuth::AccessToken.new(consumer, oauth_token, oauth_secret)
    end
  end
  
  def revoke_oauth_credentials
    self.oauth_token = nil
    self.oauth_secret = nil
    self.oauth_request_token = nil
    save!
  end
  
  def set_oauth_credentials(oauth_verifier)
    access_token = oauth_request_token.get_access_token(:oauth_verifier => oauth_verifier)
    self.oauth_token  = access_token.token
    self.oauth_secret = access_token.secret
    save!
  end
end
