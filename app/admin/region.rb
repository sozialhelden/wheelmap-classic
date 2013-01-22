ActiveAdmin.register Region do

  filter :name
  filter :created_at
  filter :updated_at

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
    column :depth
    column :parent
    default_actions
  end

  show do |r|
    attributes_table do
      row :parent
      row :id
      row :name
      row :depth
      row :poi_count do
        span r.pois_of_children.count
      end
      row :children do
        ul do
          r.children.each do |child|
            li(link_to(child.name, admin_region_path(child)))
          end
        end
      end
      row :updated_at
      row :created_at
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