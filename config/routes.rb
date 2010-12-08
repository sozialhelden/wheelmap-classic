ActionController::Routing::Routes.draw do |map|

  map.root :controller => 'home', :action => 'index'
  
  map.devise_for :admins

  map.devise_for :users

  map.resources :search, :only => :index

  map.resources :feeds, :only => :index
  
  map.resources :sitemap, :only => :index

  map.resources :oauth, :only => [:new, :index], :collection => { :revoke => :get, :callback => :get, :osm_register => :get }

  map.resources :nodes, :except => :destroy, :member => {:update_wheelchair => :put}, :collection => {:sitemap => :get}

  map.resources :users, :as => 'profile'

  map.resources :users, :collection => {:authenticate => :post}

  map.resources :user, :only => :new # Fake route for redirection to OSM register page

  map.imprint '/imprint', :controller => 'pages', :action => 'show', :id => 'imprint'

  #map.connect ':controller/:action/:id'
  #map.connect ':controller/:action/:id.:format'
end
