class OldOsm
  class Oauth
    extend Forwardable
    
    def_delegators :access_token, :get, :post, :put, :delete
    
    def initialize(access_token)
      @access_token = access_token
    end
  end
end