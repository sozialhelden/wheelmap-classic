module FeatureSwitch
  def self.clustering_enabled?
    ENV['CLUSTERING_ENABLED'] == 'true'
  end

  def self.clustering_enabled=(value)
    ENV['CLUSTERING_ENABLED'] = value
  end
end
