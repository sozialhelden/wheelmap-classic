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

    api_accessible :ember do |template|
      template.add :id
      template.add :identifier
      template.add :node_type_ids, as: :node_types
    end
  end
end
