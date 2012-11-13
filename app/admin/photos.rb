ActiveAdmin.register Photo do
  belongs_to :poi,  :optional => true
  belongs_to :user, :optional => true

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
