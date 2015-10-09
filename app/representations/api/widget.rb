module Api::Widget
  extend ActiveSupport::Concern

  included do

    api_accessible :api_simple do |t|
      t.add :id
      t.add :api_key
      t.add :height
      t.add :width
      t.add :lat
      t.add :lon
    end

  end
end
