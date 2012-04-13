require 'spec_helper'

describe OmniauthCallbacksController do
  include Devise::TestHelpers

  before(:each) do
    User.destroy_all
    @user = Factory.create(:user, :email => 'email@wheelmap.org',
                                          :password => 'password',
                                          :password_confirmation => 'password',
                                          :Omniauth_token => 'a_token',
                                          :Omniauth_secret => 'a_secret')
    sign_in @user
  end
end