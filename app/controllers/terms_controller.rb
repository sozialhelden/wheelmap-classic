class TermsController < ApplicationController
  before_filter :store_location
  layout 'relaunch'
  def index; end

  protected

  def store_location
    Rails.logger.info("REF: #{request.referer}")
    session[:user_return_to] = request.referer # unless request.referer == terms_url
    Rails.logger.info(session[:user_return_to])
  end
end
