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
  filter :region, :as => :select, :collection => proc { Region.order('lft ASC').inject([]){|memo,r| memo << ["#{'-' * r.level} #{r.name}", r.id]; memo} }
  filter :version
  filter :tags
  filter :created_at
  filter :updated_at

  controller do

    before_filter :set_per_page, :only => :index, :if => Proc.new { |controller| controller.request.format == 'text/csv' }

    def update
      region = resource
      region.update_attributes(params[:poi])
      super
    end

    private

    def set_per_page
      @per_page = params[:per_page].blank? ? max_csv_records : params[:per_page].to_i
    end

    def max_csv_records
      500
    end

  end

  csv :force_quotes => true do
    column :id
    column :name
    column :lat
    column :lon
    column :street
    column :housenumber
    column :postcode
    column :city
    column :wheelchair
    column :type do |poi|
      poi.node_type.try(:identifier)
    end
    column :category do |poi|
      poi.category.try(:identifier)
    end
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
    actions
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
