ActiveAdmin.register Photo do
  belongs_to :poi,  :optional => true
  belongs_to :user, :optional => true
  belongs_to :region, :optional => true

  filter :user_id, :as => :numeric
  filter :poi_id, :as => :numeric
  filter :taken_at
  filter :created_at

  controller do
    def collection
      super.with_user.with_poi # include user and poi
    end
  end

  index do
    column :id
    column :image do |photo|
      link_to(image_tag(photo.image.url(:thumb_iphone).to_s), image_path(photo.image.url.to_s))
    end
    column :user do |photo|
      link_to(photo.user.id, admin_user_path(photo.user))
    end
    column :poi do |photo|
      span do
        [
          link_to(photo.poi.try(:headline), admin_poi_path(photo.poi)),
          link_to('Map', node_path(photo.poi))
        ].join(',<br/>').html_safe
      end
    end
    column :taken_at
    column :created_at
    default_actions
  end
end
