ActiveAdmin.register Provider do

  menu :label => 'Anbieter', :parent => 'Premium'

  filter :name

  index do
    column :id
    column :name
    default_actions
  end

  form html: { multipart: true } do |f|
    f.inputs do
      f.input :name
      f.input :logo
    end
    f.buttons
  end
end