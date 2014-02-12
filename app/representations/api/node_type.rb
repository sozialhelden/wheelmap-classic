module Api::NodeType
  extend ActiveSupport::Concern

  included do
    api_accessible :simple do |template|
      template.add :id
      template.add :identifier
      template.add :category_id
      template.add :category, :template => :id
      template.add :localized_name
      template.add :icon
    end

    api_accessible :id do |template|
      template.add :id
      template.add :identifier
    end
    
    api_accessible :ember do |template|
      template.add :id
      template.add :identifier
    end
  end
end