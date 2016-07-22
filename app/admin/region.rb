ActiveAdmin.register Region do

  filter :name
  filter :created_at
  filter :updated_at

  controller do
    def find_resource
      Region.find_by(name: params[:id])
    end

    def update
      region = resource
      region.update_attributes(params[:region])
      super
    end
  end

  index do
    selectable_column
    column :id
    column :name
    column :depth
    column :parent
    actions
  end

  show do |r|
    attributes_table do
      row :parent do
        if !r.parent.nil?
          link_to(r.parent.name, admin_region_path(r.parent))
        end
      end
      row :id
      row :name
      row :photos do
        link_to("#{r.photos.count} Photos", admin_region_photos_path(r))
      end
      row :depth
      row :pois_total do
        span(number_with_delimiter(r.pois_of_children.count))
      end
      row :pois_tagged do
        span(number_with_delimiter(r.pois_of_children.tagged.count))
      end
      row :yes do
        span(number_with_delimiter(r.pois_of_children.fully_accessible.count))
      end
      row :limited do
        span(number_with_delimiter(r.pois_of_children.limited_accessible.count))
      end
      row :no do
        span(number_with_delimiter(r.pois_of_children.not_accessible.count))
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
  end

  form do |f|
    f.inputs do
      f.input :name
    end
    f.actions
  end

end
