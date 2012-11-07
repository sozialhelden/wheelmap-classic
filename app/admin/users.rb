ActiveAdmin.register User do

  scope :wants_newsletter

  controller do
    def update
      region = resource
      region.update_attributes(params[:user])
      super
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
    column :sign_in_count
    column 'POIs tagged', :tag_counter
    column 'POIs edited', :edit_counter
    column 'POIs created', :create_counter
    default_actions
  end

  form do |f|
    f.inputs do
      f.input :first_name
      f.input :last_name
      f.input :email, :input_html => { :readonly=>true }, :hint => false
      f.input :wants_newsletter
    end
    f.inputs "OSM" do
      f.input :osm_id, :label => 'OSM ID'
      f.input :osm_username, :label => 'OSM Username', :hint => false
    end
    f.buttons
  end
end
