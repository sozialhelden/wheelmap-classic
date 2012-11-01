ActiveAdmin.register AdminUser do

  index do
    column :email
    column :last_sign_in_at
    column :last_sign_in_ip
    default_actions
  end

  form do |f|
    f.inputs do
      f.input :email
      f.input :password
      f.input :password_confirmation
    end
    f.buttons
  end

end