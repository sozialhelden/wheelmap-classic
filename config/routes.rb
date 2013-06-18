Wheelmap::Application.routes.draw do

  ActiveAdmin.routes(self)

  namespace :admin do
    resources :pois do
      resources :photos
    end
    resources :users do
      resources :photos
    end
  end

  devise_for :admin_users, ActiveAdmin::Devise.config

  match '/ping' => 'ping#index'

  filter :locale
  RoutingFilter::Locale.include_default_locale = false

  scope "map" do
    root :to => 'home#index'
    match '/:region_id/:node_type_id/wheelchair/:wheelchair' => 'landing_pages#index'
  end

  devise_for :users, :skip => [:sessions],
                     :controllers => {
                       :confirmations      => 'confirmations',
                       :omniauth_callbacks => 'omniauth_callbacks'
                     }

  devise_scope :user do
    scope 'users' do
      match '/auth/failure' => 'omniauth_callbacks#failure'
      get  'sign_up'  => 'devise/sessions#new',     :as => :new_user_session
      get  'sign_in'  => 'devise/sessions#new',     :as => :new_user_session
      post 'sign_in'  => 'devise/sessions#create',  :as => :user_session
      get  'sign_out' => 'devise/sessions#destroy', :as => :destroy_user_session

    end
  end

  # TODO reenable feature terms
  resources :terms, :only => :index

  resources :node_types, :only => :index
  resources :search, :only => :index
  resources :feeds, :only => :index

  match 'abingo(/:action(/:id))', :to => 'abingo_dashboard', :as => :abingo

  resources :nodes, :except => :destroy do
    member do
      put :update_wheelchair
      get :claim
    end
    # TODO reenable photo routes
    resources :photos, :only => [:create, :destroy]
  end

  resources :regions, :only => [:index, :show], :constraints => { :format => 'kml' }

  resources :users, :as => 'profile', :path => '/profile'
  resources :users do
    collection do
      post :authenticate
      get :newsletter
    end
    member do
      post :reset_token
      get  :after_signup_edit
      put  :after_signup_update
      put :terms
    end
  end

  resources :user, :only => :new # Fake route for redirection to OSM register page

  match '/api' => 'api/api#index'

  namespace :api do
    resources :docs,        :only  => [:index]
    namespace :docs do
      resources :resources,        :only  => [:index, :show]
    end

    resources :assets,      :only => [:index]

    resources :nodes,       :only  => [:index, :show, :update, :create] do
      collection do
        get :search
      end
      member do
        put :update_wheelchair
      end
      resources :photos do
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

    resource :user, :except => [:index, :show, :new, :create, :edit, :update, :destroy] do
      resources :photos, :only => [:index, :destroy]
      member do
        post :accept_terms
      end
    end

    match '/users/authenticate' => 'users#authenticate'

    #Last route in routes.rb
    match '*a', :to => 'api#not_found', :format => false
  end

  match "/dashboard",               :to => redirect("https://metrics.librato.com/share/dashboards/3wf885ot?duration=604800")
  match "/ziemlich-beste-freunde",  :to => redirect("http://blog.wheelmap.org/zbf")
  match "/goeslondon",              :to => redirect("http://blog.wheelmap.org/mitmachen/goes-london/")
  match "/goes-london",             :to => redirect("http://blog.wheelmap.org/mitmachen/goes-london/")
  match '/',                        :to => redirect("/map"), :as => 'roooot'
end
