module SpecHelpers
  def current_path(url)
    URI.parse(url).path
  end
end
