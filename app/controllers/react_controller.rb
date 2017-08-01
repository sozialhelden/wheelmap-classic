class ReactController < ActionController::Base
  def index
    render file: 'public/beta/index.html'
  end
end
