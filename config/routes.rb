ActionController::Routing::Routes.draw do |map|
  map.root :controller => 'home', :action => 'index'

  map.update 'data/update/:osmid', :controller => 'data', :action => 'update'
  map.data 'data/*bbox', :controller => 'data', :action => 'data'
  
  map.search 'search', :controller => 'search', :action => 'search'
  
  map.resources :oauth, :collection => { :callback => :get }
  
  map.resources :places

  #map.connect ':controller/:action/:id'
  #map.connect ':controller/:action/:id.:format'
end
