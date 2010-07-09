ActionController::Routing::Routes.draw do |map|

  map.root :controller => 'home', :action => 'index'
  map.imprint '/imprint', :controller => 'pages', :action => 'show', :id => 'imprint'

  map.devise_for :admins

  map.devise_for :users
  
  map.resources :user, :only => :new # Fake route for redirection to OSM register page
  
  map.search 'search', :controller => 'search', :action => 'search'
  
  map.resources :oauth, :only => [:new, :index], :collection => { :callback => :get, :osm_register => :get }
  
  map.resources :nodes, :except => :destroy
  
  map.resources :users, :as => 'profile'

  map.resources :users, :collection => {:authenticate => :post}
  
  
  #map.connect ':controller/:action/:id'
  #map.connect ':controller/:action/:id.:format'
end
