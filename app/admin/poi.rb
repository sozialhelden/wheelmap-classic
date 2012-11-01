ActiveAdmin.register Poi do

  scope :fully_accessible
  scope :limited_accessible
  scope :not_accessible
  scope :unknown_accessibility

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
    default_actions
  end

  form do |f|
    f.inputs do
      f.input :name
    end
    f.buttons
  end

end