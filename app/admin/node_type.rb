ActiveAdmin.register NodeType do
  belongs_to :category,  :optional => true

  filter :category, :as => :select, :collection => proc { Category.all.inject([]){|memo,r| memo << [r.name, r.id]; memo} }
  filter :identifier
  filter :osm_key
  filter :osm_value
  filter :alt_osm_key
  filter :alt_osm_value
  filter :created_at
  filter :updated_at

  permit_params do
    %i(category identifier icon osm_key osm_value alt_osm_key alt_osm_value)
  end

  index do
    selectable_column
    column :id
    column :icon do |node_type|
      image_tag("/icons/#{node_type.icon}")
    end
    column :name, :sortable => false
    column :category, :sortable => false
    column :osm_key, :sortable => :osm_key do |node_type|
      link_to node_type.osm_key, "http://wiki.openstreetmap.org/wiki/Key:#{node_type.osm_key}", :target => '_blank'
    end
    column :osm_value, :sortable => :osm_value  do |node_type|
      link_to node_type.osm_value, "http://wiki.openstreetmap.org/wiki/Tag:#{node_type.osm_key}%3D#{node_type.osm_value}", :target => '_blank'
    end
    actions
  end

  form do |f|
    f.inputs do
      f.input :category, as: :select, collection: Category.all.inject([]){|memo,r| memo << [r.name, r.id]; memo}.sort
      f.input :identifier
      f.input :icon
    end
    f.inputs "OpenStreetMap" do
      f.input :osm_key
      f.input :osm_value

      f.input :alt_osm_key
      f.input :alt_osm_value

    end
    f.actions
  end
end
