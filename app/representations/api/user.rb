module Api
  module User
    extend ActiveSupport::Concern

    included do
      api_accessible :simple do |t|
        t.add :id
        t.add :email
      end

      api_accessible :api_simple do |t|
        t.add :id
        t.add :authentication_token, as: :api_key
        t.add :terms?, as: :terms_accepted
        t.add :privacy_policy?, as: :privacy_accepted
      end
    end
  end
end
