class SitemapController < ApplicationController
  
  def index
     respond_to do |wants|
       wants.xml{render}
     end
  end
end