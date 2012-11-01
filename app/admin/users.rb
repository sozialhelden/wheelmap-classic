ActiveAdmin.register User do

  index do
    column :first_name
    column :last_name
    column :email
    column 'OSM ID', :osm_id
    column 'API key', :authentication_token
    column 'POIs created', :create_counter
    column 'POIs edited', :edit_counter
    default_actions
  end

  scope :wants_newsletter
end
