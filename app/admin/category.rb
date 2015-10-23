ActiveAdmin.register Category do

  controller do

    # For some reason, inherited resource update does not work.
    def update
      region = resource
      region.update_attributes(params[:category])
      super
    end
  end

  filter :identifier

  index do
    selectable_column
    column :id
    column :identifier
    column :name, :sortable => false
    actions
  end


end
