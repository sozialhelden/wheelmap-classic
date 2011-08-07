Wheelmap::Application.routes.draw do
  
  match '/ping' => 'ping#index'

  filter :locale
  RoutingFilter::Locale.include_default_locale = false
  
  root :to => 'home#index'

  devise_for :admins
  devise_for :users
  
  resources :search, :only => :index
  resources :feeds, :only => :index
  resources :oauth, :only => [:new, :index] do
    collection do 
      get :revoke
      get :callback
      get :osm_register
      get :authorize
      get :grant
      get :deny
    end
  end
  
  resources :client_applications

  resources :nodes, :except => :destroy do
    member do 
      put :update_wheelchair
    end
    collection do
      get :sitemap
    end
  end

  resources :users, :as => 'profile', :path => '/profile'
  resources :users do
    collection do 
      post :authenticate
    end
    member do
      post :reset_token
    end  
  end

  resources :user, :only => :new # Fake route for redirection to OSM register page

  namespace :api do
    resources :docs,        :only  => [:index]
    namespace :docs do
      resources :resources,        :only  => [:index, :show]
    end
    
    resources :nodes,       :only  => [:index, :show, :update, :create] do
      collection do
        get :search
      end
    end

    resources :categories,   :only  => [:index, :show] do
      resources :node_types, :only  => [:index, :show]
      resources :nodes,      :only  => [:index, :show] do
        collection do
          get :search
        end
      end
    end
    
    resources :node_types, :only  => [:index, :show] do
      resources :nodes,       :only  => [:index, :show] do
        collection do
          get :search
        end
      end
    end

    resources :locales,     :only => :index
    resources :node_types,  :only => [:index, :show]
    
    
    match '/users/authenticate' => 'users#authenticate'
    
    #Last route in routes.rb
    match '*a', :to => 'api#not_found', :format => false
  end

end
