# Be sure to restart your server when you modify this file.

# Add new mime types for use in respond_to blocks:
# Mime::Type.register "text/richtext", :rtf
# Mime::Type.register_alias "text/html", :iphone
Mime::Type.register_alias 'application/json; subtype=geojson', :geojson
Mime::Type.register_alias 'application/vnd.google-earth.kml+xml', :kml
Mime::Type.register_alias 'application/x-font-woff', :woff
Mime::Type.register_alias 'application/x-font-ttf', :ttf
Mime::Type.register_alias 'application/x-font-opentype', :otf
Mime::Type.register_alias 'application/vnd.ms-fontobject', :eot
