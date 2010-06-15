module RedGreenGrid
  module Helpers
    
    def redgreengrid(count = 24)
      div = '<div></div>'
      "<div id=\"redgreengrid-red\">#{div * count}</div>" +
      "<div id=\"redgreengrid-green\">#{div * count}</div>"
    end
    
    def browser_class
      case request.user_agent
      when /(webkit|khtml|presto|trident|gecko)/i
        $~[1].downcase
      when /msie (\d)/i
        "trident trident-#{$1}"
      else
        'other-browser'
      end
    end
    
  end
end