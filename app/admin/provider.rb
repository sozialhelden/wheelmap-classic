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
      f.input :logo, hint: 'Das Logo muss exakt 44x44 Pixel gross sein.'
    end
    f.buttons
  end
end