ActiveAdmin.register Address do

  action_item(:upload_csv, :only => :index) do
    link_to "Upload CSV", upload_csv_admin_provided_pois_path
  end

  action_item(:download, :only => :index) do
    link_to 'Download KML', '/addresses.kml'
  end


  collection_action :upload_csv do
    render "/admin/addresses/upload_csv"
  end

  collection_action :import_csv, :method => :post do
    tmp_file = params[:address][:csv_file].read
    Address.import(tmp_file)
    redirect_to({:action => :index}, :notice => "CSV imported successfully!")
  end

  index do
    selectable_column
    column :coordinates do |a|
      link_to "#{a.latitude}, #{a.longitude}", "//wheelmap.org/map#/?lat=#{a.latitude}&lon=#{a.longitude}&zoom=18"
    end
    column :name
    column :address
    actions
  end
end
