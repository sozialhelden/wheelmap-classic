class User < ActiveRecord::Base
  include Devise::Models::TokenAuthenticatable
  # Include default devise modules. Others available are:
  # :http_authenticatable, :token_authenticatable, :database_authenticatable, :confirmable, :lockable, :timeoutable and :activatable
  devise :database_authenticatable, :rememberable, :confirmable, :registerable, :recoverable,
    :trackable, :validatable, :encryptable, :omniauthable, :encryptor => :sha1

  attr_accessor :first_time

  # Setup accessible (or protected) attributes for your model
  attr_accessible :email, :password, :password_confirmation, :remember_me, :wants_newsletter, :first_name, :last_name, :osm_username, :terms, :privacy_policy, :first_time, :provider_ids, :osm_id

  validates :password, :confirmation =>true

  validate :ensure_email_when_password_set
  validate :ensure_password_when_email_set, :if => :first_time?

  before_save :ensure_authentication_token
  before_save :ensure_api_key
  after_destroy :notify_admins

  scope :wants_newsletter, where(:wants_newsletter => true)
  scope :no_osm_id, where(:osm_id => nil)
  scope :no_oauth_token, where(:oauth_token => nil)
  scope :no_osm_id_and_oauth_token, where(:osm_id => nil, :oauth_token => nil)
  scope :no_password, where(:encrypted_password => "")


  before_save :send_email_confirmation,
    :unless => :new_record?, :if => :email_changed?

  before_save :set_accepted_timestamp, :if => :terms? && :terms_changed?
  before_save :set_privacy_timestamp, :if => :privacy_policy? && :privacy_policy_changed?

  has_many :photos
  has_one :widget
  has_and_belongs_to_many :providers

  acts_as_api
  include Api::User

  def send_email_confirmation
    return if self.email.blank?
    self.generate_confirmation_token if self.confirmation_token.nil?
    self.send_confirmation_instructions
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


  def self.wheelmap_visitor
    find_by_email('visitor@wheelmap.org')
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

  def set_privacy_timestamp
    self.privacy_policy_accepted_at = Time.now if self.privacy_policy?
  end

  def notify_admins
    UserMailer.user_destroyed(self).deliver
  end

  def ensure_email_when_password_set
    errors.add_on_blank(:email)     if !password.blank? and email.blank?
  end

  def ensure_password_when_email_set
    errors.add_on_blank(:password)  if !email.blank? and password.blank?
  end

  def full_name
    f = [first_name, last_name].compact.join(' ')
    f = osm_id.to_s if f.blank?
    f = id.to_s if f.blank?
    f
  end

  def first_time?
    @first_time == '1'
  end

  def email_provided_for_the_first_time?
    previous_changes.has_key?(:email) && previous_changes[:email].first.blank? && email.present?
  end

  def ensure_authentication_token
    if authentication_token.blank?
      self.authentication_token = generate_authentication_token
    end
  end

  def ensure_api_key
    if api_key.blank?
      self.api_key = generate_api_key
    end
  end

  private

  def generate_authentication_token
    loop do
      token = Devise.friendly_token
      break token unless User.where(authentication_token: token).first
    end
  end

  def generate_api_key
    loop do
      token = Devise.friendly_token
      break token unless User.where(api_key: token).first
    end
  end
end
