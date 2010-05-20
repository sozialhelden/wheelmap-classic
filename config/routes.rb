ActionController::Routing::Routes.draw do |map|
  map.devise_for :admins

  map.devise_for :users

  map.root :controller => 'home', :action => 'index'

  map.resource :user_session

  map.logout 'logout', :controller => 'user_sessions', :action => 'destroy'

  map.login 'login', :controller => 'user_sessions', :action => 'new'
  
  map.data 'data/*bbox', :controller => 'data', :action => 'data'
  
  map.search 'search', :controller => 'search', :action => 'search'

  #map.connect ':controller/:action/:id'
  #map.connect ':controller/:action/:id.:format'
end
