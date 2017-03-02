Geocoder.configure(

  # geocoding service (see below for supported options):
  lookup: :yandex,

  # to use an API key:
  # :api_key => "...",

  # geocoding service request timeout, in seconds (default 3):
  timeout: 5,

  # set default units to kilometers:
  units: :km,

  # caching (see below for details):
  # :cache => Memcache.new,
  # :cache_prefix => "geocode"

)
