class SearchController < ApplicationController
  include HTTParty
  
  URL = "http://nominatim.openstreetmap.org"
  TIMEOUT = 1
  
  before_filter :check_for_search_term
  
  rescue_from Timeout::Error, :with => :timeout
  
  def index
    respond_to do |wants|
      wants.js  {
        @result = HTTParty.get("#{URL}/search", :format => :json, :timeout => TIMEOUT, :query => { :q => URI.escape(params[:q]), :format => 'json', :'accept-language' => I18n.locale, :osm_type => 'N'} )
      }
      wants.xml {render :xml   => HTTParty.get("#{URL}/search", :format => :xml, :timeout => TIMEOUT, :query => { :q => URI.escape(params[:q]), :format => 'xml', :'accept-language' => I18n.locale, :osm_type => 'N'} ) }
      wants.json{render :json => HTTParty.get("#{URL}/search", :format => :json, :timeout => TIMEOUT, :query => { :q => URI.escape(params[:q]), :format => 'json', :'accept-language' => I18n.locale, :osm_type => 'N'} ) }
      wants.html{
        @result = HTTParty.get("#{URL}/search",
                      :format => :json,
                      :timeout => TIMEOUT,
                      :query => {
                        :q => URI.escape(params[:q]),
                        :format => 'json',
                        :'accept-language' => I18n.locale,
                        :osm_type => 'N'
                      }
                    )
      }
    end
  end
  
private
  
  def osm_url(format)
    q = URI.escape(params[:q])
    "http://nominatim.openstreetmap.org/search?q=#{q}&format=#{format}&accept-language=#{I18n.locale}&osm_type=N"
  end
  
  def check_for_search_term
    if params[:q].blank?
      @message = I18n.t('nodes.errors.param_missing', :param => 'q')
      render :action => 'error', :status => 406
    end
  end
  
end
