class OpenStreetMap
  class OauthClient

    attr_reader :access_token

    def initialize(access_token)
      @access_token = access_token
    end

    def put(url, options={})
      Rails.logger.debug("DELEGATED PUT!")
      Rails.logger.debug(url.inspect)
      Rails.logger.debug(options[:body].inspect)
      body = options[:body]
      access_token.put(url, body, {'Content-Type' => 'application/xml' })
    end

    def delete(url, options={})
      Rails.logger.debug("DELEGATED DELETE!")
      Rails.logger.debug(url.inspect)
      Rails.logger.debug(options[:body].inspect)
      body = options[:body]
      access_token.delete(url, body, {'Content-Type' => 'application/xml' })
    end

    def post(*)
      Rails.logger.debug("DELEGATED POST!")
    end

  end
end