class AbingoDashboardController < ApplicationController
  include Abingo::Controller::Dashboard

  before_filter :authenticate_admin!
end
