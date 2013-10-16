module Api::Category
  extend ActiveSupport::Concern

  included do

    api_accessible :simple do |template|
      template.add :id
      template.add :identifier
      template.add :localized_name
    end

    api_accessible :id do |template|
      template.add :id
      template.add :identifier
    end
  end
end