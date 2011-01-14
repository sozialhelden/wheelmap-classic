Wheelmap::Application.routes.draw do
  root :to => 'home#index'
  
  devise_for :admins
  devise_for :users

  resources :search, :only => :index
  resources :feeds, :only => :index
  resources :sitemap, :only => :index
  resources :oauth, :only => [:new, :index] do
    collection do 
      get :revoke
      get :callback
      get :osm_register
    end
  end

  resources :nodes, :except => :destroy do
    member do 
      put :update_wheelchair
    end
    collection do
      get :sitemap
    end
  end

  resources :users, :as => 'profile'
  resources :users do
    collection do 
      post :authenticate
    end
  end

  resources :user, :only => :new # Fake route for redirection to OSM register page

  match '/imprint' => 'pages#show'
end
