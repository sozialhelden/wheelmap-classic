ActiveAdmin.register Photo do
  belongs_to :poi,  :optional => true
  belongs_to :user, :optional => true

  controller do
    def collection
      super.with_user.with_poi # include user and poi
    end
  end

  index do
    column :id
    column :image do |photo|
      image_tag photo.image.url(:thumb).to_s
    end
    column :user
    column :poi
    column :taken_at
    column :created_at
    default_actions
  end
end
