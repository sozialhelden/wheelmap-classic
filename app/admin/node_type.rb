ActiveAdmin.register NodeType do

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
    column :identifier
    column :name
    column :category
    column :osm_key
    column :osm_value
    default_actions
  end

end