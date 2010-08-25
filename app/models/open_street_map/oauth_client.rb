class OpenStreetMap
  class OauthClient
    
    attr_reader :access_token
    
    def initialize(access_token)
      @access_token = access_token
    end
    
    def put(url, options={})
      RAILS_DEFAULT_LOGGER.debug("DELEGATED PUT!")
      RAILS_DEFAULT_LOGGER.debug(url.inspect)
      RAILS_DEFAULT_LOGGER.debug(options[:body].inspect)
      body = options[:body]
      access_token.put(url, body)
    end
    
    def post(*)
      RAILS_DEFAULT_LOGGER.debug("DELEGATED PUT!")
    end
    
  end
end