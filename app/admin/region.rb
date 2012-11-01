ActiveAdmin.register Region do

  controller do
    def update
      region = resource
      region.update_attributes(params[:region])
      super
    end
  end

  index do
    column :id
    column :name
    default_actions
  end

  form do |f|
    f.inputs do
      f.input :name
    end
    f.buttons
  end

end