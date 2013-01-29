ActiveAdmin.register Photo do
  belongs_to :poi,  :optional => true
  belongs_to :user, :optional => true

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
      link_to(image_tag(photo.image.url(:thumb_iphone).to_s), photo.image.url)
    end
    column :user
    column :poi
    column :taken_at
    column :created_at
    default_actions
  end
end
