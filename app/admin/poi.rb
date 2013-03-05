ActiveAdmin.register Poi do

  scope :fully_accessible
  scope :limited_accessible
  scope :not_accessible
  scope :unknown_accessibility
  scope :has_provider

  filter :node_type, :as => :select, :collection => proc { NodeType.all.inject([]){|memo,r| memo << [r.name, r.id]; memo} }
  filter :region, :as => :select, :collection => proc { Region.all.inject([]){|memo,r| memo << [r.name, r.id]; memo} }
  filter :category, :as => :select, :collection => proc { Category.all.inject([]){|memo,r| memo << [r.name, r.id]; memo} }
  filter :version
  filter :tags
  filter :created_at
  filter :updated_at

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
    column :photos do |poi|
      link_to "Photos", admin_poi_photos_path(poi) if poi.photos.size > 0
    end
    default_actions
  end

  show :title => :headline do |poi|
    attributes_table do
      row :osm_id
      row :version
      row :node_type
      row :tags do
        ul do
          poi.tags.each do |k,v|
            li "#{k} => #{v}"
          end
        end
      end
      row :region
      row :created_at
      row :updated_at
      row :photos do
        link_to "Photos", admin_poi_photos_path(poi)
      end
    end

    active_admin_comments
  end

  form do |f|
    f.inputs do
      f.input :name
    end
    f.buttons
  end

end