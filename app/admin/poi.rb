ActiveAdmin.register Poi do
  belongs_to :region, :optional => true
  belongs_to :node_type, :optional => true

  actions :index, :show


  scope :fully_accessible
  scope :limited_accessible
  scope :not_accessible
  scope :unknown_accessibility
  scope :has_provider
  scope :has_photo

  filter :category, :as => :select, :collection => proc { Category.all.inject([]){|memo,r| memo << [r.name, r.id]; memo}.sort }
  filter :node_type, :as => :select, :collection => proc { NodeType.all.inject([]){|memo,r| memo << [r.name, r.id]; memo}.sort }
  filter :region, :as => :select, :collection => proc { Region.all.inject([]){|memo,r| memo << [r.name, r.id]; memo}.sort }
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

    def max_csv_records
      100
    end

  end

  csv do
    column :id
    column :name
    column :lat
    column :lon
    column :street
    column :housenumber
    column :postcode
    column :city
  end

  index do
    column :osm_id do |poi|
      link_to poi.osm_id, node_path(poi)
    end
    column :wheelchair do |poi|
      status_tag(poi.wheelchair, :class => poi.wheelchair)
    end
    column :version
    column :name
    column :node_type
    column :address do |p|
      span p.address
    end
    column :lat
    column :lon
    column :region
    column :photos, :sortable => true do |poi|
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
  end
end