ActiveAdmin.register Category do

  controller do

    # For some reason, inherited resource update does not work.
    def update
      region = resource
      region.update_attributes(params[:category])
      super
    end
  end

  index do
    column :id
    column :identifier
    column :name
    default_actions
  end


end