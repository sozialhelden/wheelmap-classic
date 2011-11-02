require 'abingo'
Abingo.cache = ActiveSupport::Cache::MemCacheStore.new('localhost', { :namespace => "wheelmap/#{Rails.env}/",
                                                      :c_threshold => 10_000,
                                                      :compression => true,
                                                      :debug => Rails.env.staging?,
                                                      :readonly => false,
                                                      :urlencode => false
                                                    })