class InitialSchema < ActiveRecord::Migration
  def up
    create_table 'active_admin_comments' do |t|
      t.integer  'resource_id', limit: 8, null: false
      t.string   'resource_type', null: false
      t.integer  'author_id', limit: 8
      t.string   'author_type'
      t.text     'body'
      t.datetime 'created_at'
      t.datetime 'updated_at'
      t.string   'namespace'
    end

    add_index 'active_admin_comments', %w(author_type author_id), name: 'index_active_admin_comments_on_author_type_and_author_id'
    add_index 'active_admin_comments', ['namespace'], name: 'index_active_admin_comments_on_namespace'
    add_index 'active_admin_comments', %w(resource_type resource_id), name: 'index_admin_notes_on_resource_type_and_resource_id'

    create_table 'admin_users' do |t|
      t.string   'email',                  default: '', null: false
      t.string   'encrypted_password',     default: '', null: false
      t.string   'reset_password_token'
      t.datetime 'reset_password_sent_at'
      t.datetime 'remember_created_at'
      t.integer  'sign_in_count', default: 0
      t.datetime 'current_sign_in_at'
      t.datetime 'last_sign_in_at'
      t.string   'current_sign_in_ip'
      t.string   'last_sign_in_ip'
      t.string   'confirmation_token'
      t.datetime 'confirmed_at'
      t.datetime 'confirmation_sent_at'
      t.string   'unconfirmed_email'
      t.datetime 'created_at',                             null: false
      t.datetime 'updated_at',                             null: false
    end

    add_index 'admin_users', ['confirmation_token'], name: 'index_admin_users_on_confirmation_token', unique: true
    add_index 'admin_users', ['email'], name: 'index_admin_users_on_email', unique: true
    add_index 'admin_users', ['reset_password_token'], name: 'index_admin_users_on_reset_password_token', unique: true

    create_table 'categories' do |t|
      t.string   'identifier'
      t.datetime 'created_at'
      t.datetime 'updated_at'
    end

    create_table 'counters' do |t|
      t.date     'counter_date'
      t.integer  'tag_website',    default: 0
      t.integer  'tag_iphone',     default: 0
      t.integer  'tag_android',    default: 0
      t.integer  'update_website', default: 0
      t.integer  'update_iphone',  default: 0
      t.integer  'update_android', default: 0
      t.integer  'create_website', default: 0
      t.integer  'create_iphone',  default: 0
      t.integer  'create_android', default: 0
      t.datetime 'created_at'
      t.datetime 'updated_at'
      t.integer  'search_website', default: 0
      t.integer  'search_iphone',  default: 0
      t.integer  'search_android', default: 0
    end

    create_table 'delayed_jobs' do |t|
      t.integer  'priority',         default: 0
      t.integer  'attempts',         default: 0
      t.text     'handler'
      t.text     'last_error'
      t.datetime 'run_at'
      t.datetime 'locked_at'
      t.datetime 'failed_at'
      t.string   'locked_by'
      t.datetime 'first_started_at'
      t.datetime 'last_started_at'
      t.datetime 'finished_at'
      t.datetime 'created_at'
      t.datetime 'updated_at'
      t.string   'queue'
    end

    add_index 'delayed_jobs', %w(priority run_at), name: 'delayed_jobs_priority'

    create_table 'experiments' do |t|
      t.string   'test_name'
      t.string   'status'
      t.datetime 'created_at'
      t.datetime 'updated_at'
    end

    create_table 'node_types' do |t|
      t.integer  'category_id', limit: 8
      t.string   'identifier'
      t.string   'osm_key'
      t.string   'osm_value'
      t.string   'icon'
      t.datetime 'created_at'
      t.datetime 'updated_at'
      t.string   'alt_osm_key'
      t.string   'alt_osm_value'
    end

    add_index 'node_types', %w(id category_id), name: 'index_node_types_on_id_and_category_id'
    add_index 'node_types', %w(osm_key osm_value), name: 'index_node_types_on_osm_key_and_osm_value'

    create_table 'photos' do |t|
      t.string   'caption'
      t.string   'image'
      t.integer  'poi_id',                             limit: 8
      t.integer  'user_id',                            limit: 8
      t.datetime 'taken_at'
      t.datetime 'created_at'
      t.boolean  'image_processing'
      t.string   'image_tmp'
      t.integer  'image_width'
      t.integer  'image_height'
      t.integer  'image_gallery_ipad_retina_width'
      t.integer  'image_gallery_ipad_retina_height'
      t.integer  'image_thumb_width'
      t.integer  'image_thumb_height'
      t.integer  'image_thumb_iphone_width'
      t.integer  'image_thumb_iphone_height'
      t.integer  'image_thumb_iphone_retina_width'
      t.integer  'image_thumb_iphone_retina_height'
      t.integer  'image_gallery_iphone_width'
      t.integer  'image_gallery_iphone_height'
      t.integer  'image_gallery_iphone_retina_width'
      t.integer  'image_gallery_iphone_retina_height'
      t.integer  'image_gallery_ipad_width'
      t.integer  'image_gallery_ipad_height'
      t.integer  'image_gallery_width'
      t.integer  'image_gallery_height'
      t.integer  'image_gallery_preview_width'
      t.integer  'image_gallery_preview_height'
    end

    create_table 'pois', id: false, options: 'ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci' do |t|
      t.integer  'osm_id', limit: 8, null: false
      t.integer  'version',                                                 null: false
      t.text     'tags',                                                    null: false
      t.spatial  'geom',         limit: { type: 'point' }, null: false
      t.integer  'status',       limit: 3, default: 8, null: false
      t.datetime 'created_at'
      t.datetime 'updated_at'
      t.integer  'node_type_id', limit: 8
      t.integer  'region_id',    limit: 8
    end

    add_index 'pois', ['geom'], name: 'index_pois_on_geom', spatial: true
    add_index 'pois', %w(node_type_id osm_id), name: 'index_pois_on_node_type_id_and_osm_id'
    add_index 'pois', %w(node_type_id status osm_id), name: 'index_pois_on_node_type_id_and_osm_id_and_status'
    add_index 'pois', ['osm_id'], name: 'index_pois_on_osm_id', unique: true
    add_index 'pois', ['region_id'], name: 'index_pois_on_region_id'
    add_index 'pois', ['status'], name: 'index_pois_on_status'
    execute 'CREATE FULLTEXT INDEX fulltext_index_pois_on_tags ON pois (tags)'

    create_table 'provided_pois' do |t|
      t.integer  'poi_id',      limit: 8, null: false
      t.integer  'provider_id', limit: 8, null: false
      t.string   'wheelchair'
      t.string   'url'
      t.datetime 'created_at'
      t.datetime 'updated_at'
    end

    add_index 'provided_pois', %w(provider_id poi_id), name: 'index_provided_pois_on_provider_id_and_poi_id', unique: true

    create_table 'providers' do |t|
      t.string   'name'
      t.datetime 'created_at'
      t.datetime 'updated_at'
      t.string   'logo'
    end

    create_table 'regions' do |t|
      t.string   'name'
      t.spatial  'grenze', limit: { type: 'geometry' }, null: false
      t.datetime 'created_at'
      t.datetime 'updated_at'
      t.integer  'parent_id', limit: 8
      t.integer  'admin_level'
      t.integer  'lft'
      t.integer  'rgt'
      t.integer  'depth'
    end

    create_table 'slugs' do |t|
      t.string   'name'
      t.integer  'sluggable_id', limit: 8
      t.integer  'sequence', default: 1, null: false
      t.string   'sluggable_type', limit: 40
      t.string   'scope'
      t.datetime 'created_at'
    end

    add_index 'slugs', %w(name sluggable_type sequence scope), name: 'index_slugs_on_n_s_s_and_s', unique: true
    add_index 'slugs', ['sluggable_id'], name: 'index_slugs_on_sluggable_id'

    create_table 'users' do |t|
      t.string   'oauth_token'
      t.string   'oauth_secret'
      t.string   'email'
      t.string   'encrypted_password'
      t.string   'password_salt', default: '', null: false
      t.string   'remember_token'
      t.datetime 'remember_created_at'
      t.integer  'sign_in_count', default: 0
      t.datetime 'current_sign_in_at'
      t.datetime 'last_sign_in_at'
      t.string   'current_sign_in_ip'
      t.string   'last_sign_in_ip'
      t.integer  'changeset_id', limit: 8
      t.datetime 'created_at'
      t.datetime 'updated_at'
      t.string   'authentication_token'
      t.boolean  'wants_newsletter', default: false, null: false
      t.string   'confirmation_token'
      t.datetime 'confirmed_at'
      t.datetime 'confirmation_sent_at'
      t.integer  'osm_id', limit: 8
      t.string   'first_name'
      t.string   'last_name'
      t.integer  'create_counter',                          default: 0,     null: false
      t.integer  'edit_counter',                            default: 0,     null: false
      t.string   'osm_username'
      t.integer  'tag_counter',                             default: 0,     null: false
      t.integer  'photos_count',                            default: 0,     null: false
      t.boolean  'terms',                                   default: false, null: false
      t.datetime 'accepted_at'
      t.boolean  'privacy_policy', default: false, null: false
      t.datetime 'privacy_policy_accepted_at'
      t.string   'reset_password_token'
      t.datetime 'reset_password_sent_at'
    end

    add_index 'users', ['authentication_token'], name: 'index_users_on_authentication_token', unique: true
    add_index 'users', ['oauth_token'], name: 'index_users_on_oauth_token'
    add_index 'users', ['wants_newsletter'], name: 'index_users_on_wants_newsletter'
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
