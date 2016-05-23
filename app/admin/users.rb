ActiveAdmin.register User do

  scope :wants_newsletter
  scope :no_osm_id
  scope :no_oauth_token
  scope :no_osm_id_and_oauth_token
  scope :no_password

  filter :first_name
  filter :last_name
  filter :email
  filter :wants_newsletter, :as => :check_boxes
  filter :sign_in_count
  filter :current_sign_in_at
  filter :current_sign_in_ip
  filter :last_sign_in_at
  filter :last_sign_in_ip
  filter :authentication_token
  filter :tag_counter
  filter :edit_counter
  filter :create_counter
  filter :photos_count
  filter :confirmed_at
  filter :created_at
  filter :updated_at
  filter :accepted_at
  filter :providers, :collection => Provider.all.inject([]){|memo,r| memo << [r.name, r.id]; memo}.sort


  controller do
    def update
      region = resource
      region.update_attributes(params[:user])
      super
    end

    def destroy
      poop = resource
      poop.destroy
      redirect_to(:back)
    end
  end

  index do
    column :first_name
    column :last_name
    column :email
    column 'OSM', :osm_id do |u|
      if u.osm_username.blank?
        span u.osm_id
      else
        link_to u.osm_username, "#{OpenStreetMapConfig.oauth_site}/user/#{u.osm_username}"
      end
    end
    column :photos, :sortable => :photos_count do |u|
      link_to u.photos.count, admin_user_photos_path(u) if u.photos.count > 0
    end
    column :sign_in_count
    column 'POIs tagged', :tag_counter
    column 'POIs edited', :edit_counter
    column 'POIs created', :create_counter
    actions
  end

  form do |f|
    f.inputs do
      f.input :first_name
      f.input :last_name
      f.input :email, :input_html => { :readonly => true }, :hint => false
      f.input :wants_newsletter
    end
    f.inputs "OSM" do
      f.input :osm_id, :label => 'OSM ID'
      f.input :osm_username, :label => 'OSM Username', :hint => false
    end
    f.inputs "Providers" do
      f.input :providers, :collection => Provider.all.inject([]){|memo,r| memo << [r.name, r.id]; memo}.sort
    end
    f.actions
  end
end
