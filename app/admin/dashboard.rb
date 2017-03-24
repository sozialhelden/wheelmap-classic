ActiveAdmin.register_page 'Dashboard' do
  menu priority: 1, label: proc { I18n.t('active_admin.dashboard') }

  content title: proc { I18n.t('active_admin.dashboard') } do
    columns do
      column do
        panel 'Power taggers' do
          table_for User.order('tag_counter DESC').limit(10) do
            column :name do |u|
              link_to(u.full_name, admin_user_path(u))
            end
            column 'OSM', :osm_id do |u|
              if u.osm_username.blank?
                span u.osm_id
              else
                link_to u.osm_username, "#{OpenStreetMapConfig.oauth_site}/user/#{u.osm_username}"
              end
            end
            column 'POIs tagged', :tag_counter
          end
        end
      end

      column do
        panel 'Power editors' do
          section 'Power editors', priority: 2 do
            table_for User.order('edit_counter DESC').limit(10) do
              column :name do |u|
                link_to(u.full_name, admin_user_path(u))
              end
              column 'OSM', :osm_id do |u|
                if u.osm_username.blank?
                  span u.osm_id
                else
                  link_to u.osm_username, "#{OpenStreetMapConfig.oauth_site}/user/#{u.osm_username}"
                end
              end
              column 'POIs edited', :edit_counter
            end
          end
        end
      end

      column do
        panel 'Power creators' do
          table_for User.order('create_counter DESC').limit(10) do
            column :name do |user|
              link_to(user.full_name, admin_user_path(user))
            end
            column 'OSM', :osm_id do |u|
              if u.osm_username.blank?
                span u.osm_id
              else
                link_to u.osm_username, "#{OpenStreetMapConfig.oauth_site}/user/#{u.osm_username}"
              end
            end
            column 'POIs created', :create_counter
          end
        end
      end
    end

    columns do
      column do
        panel 'Latest users' do
          table_for User.order('created_at DESC').limit(10) do
            column :name do |user|
              link_to(user.full_name, admin_user_path(user))
            end
            column :created_at do |user|
              span I18n.l(user.created_at, format: :short)
            end
          end
        end
      end

      column do
        panel 'Latest pois' do
          table_for Poi.order('created_at DESC').limit(10) do
            column :name do |poi|
              link_to(poi.name, admin_poi_path(poi))
            end
            column :created_at do |poi|
              span I18n.l(poi.created_at, format: :short)
            end
          end
        end
      end

      column do
        panel 'Latest photos' do
          table_for Photo.order('created_at DESC').limit(10) do
            column :photo do |photo|
              image_tag(photo.image.url(:thumb_iphone).to_s)
            end
            column :created_at do |photo|
              span I18n.l(photo.created_at, format: :short)
            end
          end
        end
      end
    end

    # Here is an example of a simple dashboard with columns and panels.
    #
    # columns do
    #   column do
    #     panel "Recent Posts" do
    #       ul do
    #         Post.recent(5).map do |post|
    #           li link_to(post.title, admin_post_path(post))
    #         end
    #       end
    #     end
    #   end

    #   column do
    #     panel "Info" do
    #       para "Welcome to ActiveAdmin."
    #     end
    #   end
    # end
  end # content
end
