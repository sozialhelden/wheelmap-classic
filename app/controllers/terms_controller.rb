class TermsController < ApplicationController

  before_filter :store_location

  def index
  end

  protected

  def store_location
    Rails.logger.info("REF: #{request.referer}")
    session[:user_return_to] = request.referer if request.referer != terms_url
  end
end