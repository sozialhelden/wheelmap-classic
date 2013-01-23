class User < ActiveRecord::Base
  include Devise::Models::TokenAuthenticatable
  # Include default devise modules. Others available are:
  # :http_authenticatable, :token_authenticatable, :database_authenticatable, :confirmable, :lockable, :timeoutable and :activatable
  devise :database_authenticatable, :rememberable, :confirmable, :registerable,
    :trackable, :validatable, :encryptable, :omniauthable, :encryptor => :sha1

  # Setup accessible (or protected) attributes for your model
  attr_accessible :email, :password, :password_confirmation, :remember_me, :wants_newsletter, :first_name, :last_name, :osm_username, :terms

  validates :password, :confirmation =>true

  validate :ensure_email_when_password_set

  before_save :ensure_authentication_token
  after_destroy :notify_admins

  scope :wants_newsletter, where(:wants_newsletter => true)

  before_save :send_email_confirmation,
    :unless => :new_record?, :if => :email_changed?

  before_save :set_accepted_timestamp, :if => :terms? && :terms_changed?

  has_many :photos

  acts_as_api

  api_accessible :simple do |t|
    t.add :id
    t.add :email
  end

  api_accessible :api_simple do |t|
    t.add :id
    t.add :authentication_token, :as => :api_key
    t.add :terms?, :as => :terms_accepted
  end

  def send_email_confirmation
    return if self.email.blank?
    self.generate_confirmation_token if self.confirmation_token.nil?
    self.devise_mailer.confirmation_instructions(self).deliver
  end

  # TODO Renebale user tracking
  # Do not update tracked fields if user did not accept terms.
  def update_tracked_fields_with_terms!(request)
    update_tracked_fields_without_terms!(request) if terms?
  end
  alias_method_chain :update_tracked_fields!, :terms

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
    self.oauth_token  = credentials_hash['token']
    self.oauth_secret = credentials_hash['secret']
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

  def update_osm_username
    api = create_authorized_api
    update_attribute(:osm_username, api.find_user.display_name)
  rescue Rosemary::Error
  end

  def set_accepted_timestamp
    self.accepted_at = Time.now if self.terms?
  end

  def notify_admins
    UserMailer.user_destroyed(self).deliver
  end

  def ensure_email_when_password_set
    errors.add_on_blank(:email) if !password.blank? and email.blank?
  end

  def full_name
    f = [first_name, last_name].compact.join(' ')
    f = id if f.blank?
    f
  end

end
