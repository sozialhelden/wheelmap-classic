
# This is a temporary workaround to fix 'RangeError: exceeded available param key
# space error', pls see https://github.com/rack/rack/issues/318. When upgrading
# Rails pls consider to check again.
if Rack::Utils.respond_to?("key_space_limit=")
  Rack::Utils.key_space_limit = 262144 # 4 times the default size
end
