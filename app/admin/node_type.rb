ActiveAdmin.register NodeType do

  filter :category, :as => :select, :collection => proc { Category.all.inject([]){|memo,r| memo << [r.name, r.id]; memo} }
  filter :identifier
  filter :osm_key
  filter :osm_value
  filter :alt_osm_key
  filter :alt_osm_value
  filter :created_at
  filter :updated_at


  controller do
    def update
      region = resource
      region.update_attributes(params[:node_type])
      super
    end
  end

  index do
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
    default_actions
  end

end