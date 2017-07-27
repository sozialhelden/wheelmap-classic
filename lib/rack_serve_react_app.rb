module Rack
  class ServeReactApp
    def initialize(app, _options = {})
      @app = app
    end

    def call(env)
      request = Rack::Request.new(env)
      if request.path.match(/^\/beta/)
        headers = { 'content-type': 'text/html; charset=utf-8' }
        [200, headers, ::File.read(Rails.root.join('public', 'frontend', 'index.html'))]
      else
        @app.call(env)
      end
    end
  end
end