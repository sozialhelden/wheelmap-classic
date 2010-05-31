module OpenStreetMap
  class Oauth
    extend Forwardable
    
    def_delegators :access_token, :get, :post, :put, :delete
    
    attr_reader :atoken, :asecret
    
    def initialize(atoken,asecret,options={})
      @atoken,@asecret,@consumer_options = atoken,asecret,{}
    end
    
    def self.consumer
      @@consumer ||= ::OAuth::Consumer.new(OpenStreetMapConfig.oauth_key, OpenStreetMapConfig.oauth_secret, :site => OpenStreetMapConfig.oauth_site)
    end
    
    def access_token
      @access_token ||= ::OAuth::AccessToken.new(self.class.consumer, atoken, asecret)
    end
  end
end