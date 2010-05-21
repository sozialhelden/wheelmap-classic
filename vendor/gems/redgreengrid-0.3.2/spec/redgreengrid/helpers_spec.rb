require File.dirname(__FILE__) + '/../spec_helper'

describe RedGreenGrid::Helpers do
  include RedGreenGrid::Helpers
  
  it "should render the grid" do
    result = redgreengrid
    
    result.should have_tag("#redgreengrid-red div", 24)
    result.should have_tag("#redgreengrid-green div", 24)
  end
  
  it "should render the grid with own count" do
    result = redgreengrid(50)
    
    result.should have_tag("#redgreengrid-red div", 50)
    result.should have_tag("#redgreengrid-green div", 50)
  end
  
  it "should generate the right browser class" do
    [
      ['Lynx/2.8.4rel.1 libwww-FM/2.14 SSL-MM/1.4.1 OpenSSL/0.9.6c', 'other-browser'],
      ['Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.0)', 'trident'],
      ['Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0; WOW64; Trident/4.0; SLCC1; .NET CLR 2.0.50727; Media Center PC 5.0; OfficeLiveConnector.1.3; OfficeLivePatch.0.0; .NET CLR 3.5.30729; .NET CLR 3.0.30618)', 'trident'],
      ['Mozilla/4.77 [en] (X11; I; IRIX;64 6.5 IP30)', 'other-browser'],
      ['Mozilla/5.0 (compatible; Konqueror/3.2; Linux 2.6.2) (KHTML, like Gecko)', ''],
      ['Mozilla/5.0 (Macintosh; U; PPC Mac OS X; en) AppleWebKit/125.2 (KHTML, like Gecko) Safari/125.8', 'webkit'],
      ['Mozilla/5.0 (OS/2; U; Warp 4.5; de; rv:1.8.1.11) Gecko/20071129 PmWFx/2.0.0.11', 'gecko'],
      ['Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) AppleWebKit/525.13 (KHTML, like Gecko) Chrome/0.A.B.C Safari/525.13', 'webkit'],
      ['Mozilla/5.0 (Windows; U; Windows NT 5.1; de; rv:1.9.0.10) Gecko/2009042316 Firefox/3.0.10', 'gecko'],
      ['Mozilla/5.0 (X11; U; Linux i586; en-US; rv:1.7.3) Gecko/20040924 Epiphany/1.4.4 (Ubuntu)', 'gecko'],
      ['Opera/9.80 (Macintosh; Intel Mac OS X; U; en) Presto/2.2.15 Version/10.00', 'presto']
    ].each do |user_agent, rendering_engine|
      @user_agent = user_agent
      browser_class.should =~ /#{rendering_engine}/
    end
  end
  
  def request
    mock('request', :user_agent => @user_agent)
  end
  
end