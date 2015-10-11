module WidgetsHelper
  def embed_src(options)
    embed_url(options, {
        :lat => options.lat,
        :lon => options.lon
      })
  end
end
