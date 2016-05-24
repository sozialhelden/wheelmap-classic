ActiveAdmin.register ProvidedPoi do

  menu :label => 'Premiumeintrag', :parent => 'Premium'

  belongs_to :provider, :optional => true
  belongs_to :poi, :optional => true

  filter :poi_id
  filter :provider, as: :select, collection: proc { Provider.all.inject([]){|memo,r| memo << [r.name, r.id]; memo}.sort}
  filter :wheelchair, as: :select, collection: proc { Poi::WHEELCHAIR_STATUS_VALUES.map{|k,v| [ I18n.t("wheelchairstatus.#{k}"),k]}}
  filter :url

  action_item do
    link_to upload_csv_admin_provided_pois_path do
      "Upload CSV"
    end
  end

  collection_action :upload_csv, title: "Upload CSV" do
    render "/admin/provided_pois/upload_csv"
  end

  collection_action :import_csv, title: "Import CSV", method: :post do
    provider_id = params[:provided_poi][:provider_id]
    tmp_file = params[:provided_poi][:csv_file].read
    count = ProvidedPoi.import(provider_id, tmp_file)
    flash[:notice] = "Successfully imported #{count} premium places." if count > 0
    redirect_to("/admin/provided_pois/upload_csv")
  end

  controller do
    include CacheableFlash
  end

  index do
   column :id do |p|
     link_to p.id, node_path(p.poi_id), target: '_blank'
   end
   column :wheelchair do |p|
     status_tag(p.wheelchair, :class => p.wheelchair)
   end
   column :wheelchair_toilet do |p|
     status_tag(p.wheelchair_toilet, :class => p.wheelchair_toilet)
   end
   column :poi do |p|
     link_to(p.poi_id, admin_poi_path(p.poi_id))
   end
   column :provider
   column :url
   default_actions
  end

  form do |f|
    f.inputs do
      f.input :poi_id
      f.input :provider, as: :select, collection: Provider.all.inject([]){|memo,r| memo << [r.name, r.id]; memo}.sort
      f.input :wheelchair, as: :select, collection: Poi::WHEELCHAIR_STATUS_VALUES.map{|k,v| [I18n.t("wheelchairstatus.#{k}"),k]}
      f.input :url
    end
    f.actions
  end


end