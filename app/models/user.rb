class User < ActiveRecord::Base
  include Devise::Models::TokenAuthenticatable
  # Include default devise modules. Others available are:
  # :http_authenticatable, :token_authenticatable, :database_authenticatable, :confirmable, :lockable, :timeoutable and :activatable
  devise :database_authenticatable, :rememberable, :confirmable,
    :trackable, :validatable, :encryptable, :omniauthable, :encryptor => :sha1

  # Setup accessible (or protected) attributes for your model
  attr_accessible :email, :password, :password_confirmation, :remember_me, :wants_newsletter

  validates_uniqueness_of :email, :case_sensitive => false, :allow_blank => true

  before_save :ensure_authentication_token

  acts_as_api

  api_accessible :simple do |t|
    t.add :id
    t.add :email
  end

  api_accessible :api_simple do |t|
    t.add :id
    t.add :authentication_token, :as => :api_key
  end

  def password_required?
    false
  end

  def email_required?
    false
  end

  def confirmation_required?
    false
  end

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
    save!
  end

  def set_oauth_credentials(oauth_verifier)
    access_token = oauth_request_token.get_access_token(:oauth_verifier => oauth_verifier)
    self.oauth_token  = access_token.token
    self.oauth_secret = access_token.secret
    save!
  end

  def update_oauth_credentials(credentials_hash)
    oauth_token  = credentials_hash['token']
    oauth_secret = credentials_hash['secret']
    save(:validate => false)
  end

  def self.authenticate(email, password)
    user = User.where(:email => email).first
    user if user && user.valid_password?(password)
  end

  def inactive_message
    I18n.t('devise.failure.unconfirmed')
  end

  def create_authorized_api
    client = ::Rosemary::OauthClient.new(access_token)
    api = ::Rosemary::Api.new(client)
  end

  def update_osm_id
    api = create_authorized_api
    update_attribute(:osm_id, api.find_user.id)
  rescue Rosemary::Error
  end
end
