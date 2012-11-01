ActiveAdmin.register Poi do

  controller do
    def update
      region = resource
      region.update_attributes(params[:poi])
      super
    end
  end

  index do
    column :osm_id
    column :wheelchair
    column :name
    column :node_type
    column :street
    column :housenumber
    column :postcode
    column :city
    column :lat
    column :lon
    column :region
    default_actions
  end

  form do |f|
    f.inputs do
      f.input :name
    end
    f.buttons
  end

end