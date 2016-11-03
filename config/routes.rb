Wheelmap::Application.routes.draw do

  apipie

  get '/ping', to: 'ping#index'

  #
  # The if statement here is workaround to ensure that users are able to do an initial migration
  # without problems.
  # Without this if statement ActiveAdmin complains about missing tables and let the migration fail.
  # For more details, see https://github.com/activeadmin/activeadmin/issues/783
  #
  ActiveAdmin.routes(self) if !$ARGV.nil? && $ARGV.none? { |x| x =~ /migrate|rollback/i}

  namespace :admin do
    resources :pois do
      resources :photos
    end
    resources :users do
      resources :photos
    end
  end

  devise_for :admin_users, ActiveAdmin::Devise.config

  filter :locale
  RoutingFilter::Locale.include_default_locale = false

  scope "map" do
    root :to => 'home#index'
    match '/:region_id/:node_type_id/wheelchair/:wheelchair' => 'landing_pages#index', via: [:get, :post, :put, :delete]
  end

  devise_for :users, :skip => [:sessions],
                     :controllers => {
                       :confirmations      => 'confirmations',
                       :omniauth_callbacks => 'omniauth_callbacks'
                     }

  devise_scope :user do
    scope 'users' do
      get  '/auth/failure' => 'omniauth_callbacks#failure'
      get  'sign_up'  => 'devise/sessions#new'
      get  'sign_in'  => 'devise/sessions#new',     :as => :new_user_session
      post 'sign_in'  => 'devise/sessions#create',  :as => :user_session
      get  'sign_out' => 'devise/sessions#destroy', :as => :destroy_user_session
    end
  end

  # TODO reenable feature terms
  resources :terms, :only => :index
  resources :addresses, :only => :index

  resources :search, :only => :index
  resources :feeds, :only => :index
  resources :oauth, :only => [] do
    # LEAVE THIS IN HERE, CAUSE iphone 2 depends on this URL
    get :register_osm, :on => :collection
  end

  # For the new node widget frontend routing
  get 'nodes/new/:section', to: 'nodes#new', as: :new_node_section
  post 'nodes/validate', to: 'nodes#validate', as: :validate_node

  resources :nodes, :except => [:destroy] do
    collection do
      get ':x/:y/:z', to: 'nodes#tiles', as: 'tiles'
    end
    member do
      put :update_wheelchair
      put :update_toilet
      get :claim
    end
    # TODO reenable photo routes
    resources :photos, :only => [:create, :destroy]
    collection do
      get :similar
    end
  end

  resources :regions, :only => [:index, :show], :constraints => { :format => 'kml' }

  resources :categories,  only: [:index, :show]
  resources :node_types,  only: [:index, :show]
  resources :photos,      only: [:index, :show]

  post 'widgets/:id', to: 'widgets#update', as: :widgets
  get 'embed(/:key)', to: 'widgets#embed', as: :embed

  resource :users, :as => 'profile', :path => '/profile' do
    resources :photos, :only => [:create, :destroy]
    collection do
      post :authenticate
      get :newsletter
      get :signed_in
      get :photos
      get :signed_in_token
      get :widgets
    end
    member do
      post :reset_token
      get  :after_signup_edit
      put  :after_signup_update
      patch :terms
    end
  end

  resources :user, :only => :new # Fake route for redirection to OSM register page

  # match in Rails 3.2 accepts all HTTP actions, therefore we need to define them explicitly
  match '/api', to: 'api/api#index', via: [:get, :post, :put, :delete]

  namespace :api do
    resources :docs,        :only  => [:index]
    namespace :docs do
      resources :resources,        :only  => [:index, :show]
    end

    resources :assets,      :only => [:index]

    resources :nodes,       :only => [:index, :show, :update, :create] do
      collection do
        get :search
        get :counts, :to => 'counter#index'
      end
      member do
        put :update_wheelchair
        put :update_toilet
      end
      resources :measurements, only: [:create] do
        post 'metadata' => 'measurements#add_metadata'
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
      resources :nodes,    :only  => [:index, :show] do
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

    match '/users/authenticate' => 'users#authenticate', via: [:post]

    #Last route in routes.rb
    match '*a', :to => 'api#not_found', :format => false, via: [:get, :post, :put, :delete]
  end

  resources :community_support, :only => [:new, :create]

  get "/dashboard", :to => redirect("https://metrics.librato.com/share/dashboards/3wf885ot?duration=604800")
  get '/',          :to => redirect("/map"), :as => 'roooot'


end
