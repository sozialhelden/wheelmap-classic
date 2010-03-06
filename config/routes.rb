ActionController::Routing::Routes.draw do |map|
  map.root :controller => 'home', :action => 'index'

  map.resource :user_session

  map.logout 'logout', :controller => 'user_sessions', :action => 'destroy'

  map.login 'login', :controller => 'user_sessions', :action => 'new'
  
  map.data 'data/:type', :controller => 'data', :action => 'data'

  map.connect ':controller/:action/:id'
  map.connect ':controller/:action/:id.:format'
end
