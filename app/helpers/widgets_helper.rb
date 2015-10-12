module WidgetsHelper
  def embed_src(options)
    embed_url(options, {
        :lat => options.lat,
        :lon => options.lon,
        :categories => options.categories ? 0 : 1
      }, {:anchor => '#'})
  end
end
