ActiveAdmin.register AdminUser do

  controller do
    def update
      region = resource
      region.update_attributes(params[:admin_user])
      super
    end
  end


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