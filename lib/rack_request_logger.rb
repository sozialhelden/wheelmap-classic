module Rack
  # A Rack middleware to log request and responses,
  # especially to investigate XML stuff going through the API
  class RequestLogger
    def initialize(app)
      @logger = ::Logger.new($stdout)
      @app = app
    end

    def call(env)
      if env['HTTP_USER_AGENT'] =~ /Wheelmap/
        @logger.debug(">>>>>>>>>>>>>>>>>>>>>>>>>>")
        @logger.debug("#{Time.now.utc} new request:")
        @logger.debug("----------- REQUEST HEADERS -----------")
        headers = env.select { |k, v| k =~ /^HTTP_/ } || []
        @logger.debug(headers.map { |k, v| "#{k}: #{v}"}.join("\n"))

        request = Rack::Request.new env
        @logger.debug('----------- REQUEST BODY (RAW_POST_DATA) -----------')
        @logger.debug(request.params.to_yaml)
      end

      response = @app.call(env)

      if env['HTTP_USER_AGENT'] =~ /Wheelmap/
        begin
          @logger.debug('----------- RESPONSE HEADERS -----------')
          @logger.debug(response[1].to_yaml)
          @logger.debug('----------- RESPONSE CODE -----------')
          @logger.debug(response[0].to_s)
          @logger.debug('----------- RESPONSE BODY -----------')
          @logger.debug(response[2].body.to_s)
        rescue => e
          @logger.debug("Failed to log request: #{e}")
        end
        @logger.debug('<<<<<<<<<<<<<<<<<<<<<<<<<<')
      end
      response
    end
  end
end
