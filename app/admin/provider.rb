ActiveAdmin.register Provider do

  menu :label => 'Anbieter', :parent => 'Premium'

  filter :name

  index do
    column :id
    column :name
    default_actions
  end


end