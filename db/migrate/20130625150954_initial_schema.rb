class InitialSchema < ActiveRecord::Migration
  def self.up
    create_table "active_admin_comments", :force => true do |t|
      t.integer  "resource_id",   :limit => 8, :null => false
      t.string   "resource_type",              :null => false
      t.integer  "author_id",     :limit => 8
      t.string   "author_type"
      t.text     "body"
      t.datetime "created_at"
      t.datetime "updated_at"
      t.string   "namespace"
    end

    add_index "active_admin_comments", ["author_type", "author_id"], :name => "index_active_admin_comments_on_author_type_and_author_id"
    add_index "active_admin_comments", ["namespace"], :name => "index_active_admin_comments_on_namespace"
    add_index "active_admin_comments", ["resource_type", "resource_id"], :name => "index_admin_notes_on_resource_type_and_resource_id"

    create_table "admin_users", :force => true do |t|
      t.string   "email",                                 :default => "", :null => false
      t.string   "encrypted_password",     :limit => 128, :default => "", :null => false
      t.string   "reset_password_token"
      t.datetime "reset_password_sent_at"
      t.string   "remember_token"
      t.datetime "remember_created_at"
      t.integer  "sign_in_count",                         :default => 0
      t.datetime "current_sign_in_at"
      t.datetime "last_sign_in_at"
      t.string   "current_sign_in_ip"
      t.string   "last_sign_in_ip"
      t.string   "confirmation_token"
      t.datetime "confirmed_at"
      t.datetime "confirmation_sent_at"
      t.datetime "created_at"
      t.datetime "updated_at"
    end

    add_index "admin_users", ["confirmation_token"], :name => "index_admin_users_on_confirmation_token", :unique => true
    add_index "admin_users", ["email"], :name => "index_admin_users_on_email", :unique => true
    add_index "admin_users", ["reset_password_token"], :name => "index_admin_users_on_reset_password_token", :unique => true

    create_table "alternatives", :force => true do |t|
      t.integer "experiment_id", :limit => 8
      t.string  "content"
      t.string  "lookup",        :limit => 32
      t.integer "weight",                      :default => 1
      t.integer "participants",                :default => 0
      t.integer "conversions",                 :default => 0
    end

    add_index "alternatives", ["experiment_id"], :name => "index_alternatives_on_experiment_id"
    add_index "alternatives", ["lookup"], :name => "index_alternatives_on_lookup"

    create_table "categories", :force => true do |t|
      t.string   "identifier"
      t.datetime "created_at"
      t.datetime "updated_at"
    end

    create_table "counters", :force => true do |t|
      t.date     "counter_date"
      t.integer  "tag_website",    :default => 0
      t.integer  "tag_iphone",     :default => 0
      t.integer  "tag_android",    :default => 0
      t.integer  "update_website", :default => 0
      t.integer  "update_iphone",  :default => 0
      t.integer  "update_android", :default => 0
      t.integer  "create_website", :default => 0
      t.integer  "create_iphone",  :default => 0
      t.integer  "create_android", :default => 0
      t.datetime "created_at"
      t.datetime "updated_at"
      t.integer  "search_website", :default => 0
      t.integer  "search_iphone",  :default => 0
      t.integer  "search_android", :default => 0
    end

    create_table "delayed_jobs", :force => true do |t|
      t.integer  "priority",         :default => 0
      t.integer  "attempts",         :default => 0
      t.text     "handler"
      t.text     "last_error"
      t.datetime "run_at"
      t.datetime "locked_at"
      t.datetime "failed_at"
      t.string   "locked_by"
      t.datetime "first_started_at"
      t.datetime "last_started_at"
      t.datetime "finished_at"
      t.datetime "created_at"
      t.datetime "updated_at"
      t.string   "queue"
    end

    add_index "delayed_jobs", ["priority", "run_at"], :name => "delayed_jobs_priority"

    create_table "experiments", :force => true do |t|
      t.string   "test_name"
      t.string   "status"
      t.datetime "created_at"
      t.datetime "updated_at"
    end

    add_index "experiments", ["test_name"], :name => "index_experiments_on_test_name"

    create_table "iphone_counters", :force => true do |t|
      t.string   "install_id"
      t.string   "device_version"
      t.string   "app_version"
      t.string   "os_version"
      t.datetime "created_at"
      t.datetime "updated_at"
    end

    create_table "node_types", :force => true do |t|
      t.integer  "category_id",   :limit => 8
      t.string   "identifier"
      t.string   "osm_key"
      t.string   "osm_value"
      t.string   "icon"
      t.datetime "created_at"
      t.datetime "updated_at"
      t.string   "alt_osm_key"
      t.string   "alt_osm_value"
    end

    add_index "node_types", ["id", "category_id"], :name => "index_node_types_on_id_and_category_id"
    add_index "node_types", ["osm_key", "osm_value"], :name => "index_node_types_on_osm_key_and_osm_value"

    create_table "photos", :force => true do |t|
      t.string   "caption"
      t.string   "image"
      t.boolean  "image_processing"
      t.integer  "poi_id",                             :limit => 8
      t.integer  "user_id",                            :limit => 8
      t.datetime "taken_at"
      t.datetime "created_at"
      t.integer  "image_width"
      t.integer  "image_height"
      t.integer  "image_gallery_ipad_retina_width"
      t.integer  "image_gallery_ipad_retina_height"
      t.integer  "image_thumb_width"
      t.integer  "image_thumb_height"
      t.integer  "image_thumb_iphone_width"
      t.integer  "image_thumb_iphone_height"
      t.integer  "image_thumb_iphone_retina_width"
      t.integer  "image_thumb_iphone_retina_height"
      t.integer  "image_gallery_iphone_width"
      t.integer  "image_gallery_iphone_height"
      t.integer  "image_gallery_iphone_retina_width"
      t.integer  "image_gallery_iphone_retina_height"
      t.integer  "image_gallery_ipad_width"
      t.integer  "image_gallery_ipad_height"
      t.integer  "image_gallery_width"
      t.integer  "image_gallery_height"
      t.string   "image_tmp"
    end

    create_table "pois", :id => false, :force => true do |t|
      t.integer  "osm_id",       :limit => 8,                  :null => false
      t.integer  "version",                                    :null => false
      t.text     "tags",                                       :null => false
      t.integer  "status",                      :default => 8, :null => false
      t.datetime "created_at"
      t.datetime "updated_at"
      t.point    "geom",         :limit => nil,                :null => false, :srid => 0
      t.integer  "node_type_id", :limit => 8
      t.integer  "region_id",    :limit => 8
    end

    add_index "pois", ["geom"], :name => "index_pois_on_geom", :spatial => true
    add_index "pois", ["node_type_id", "osm_id"], :name => "index_pois_on_node_type_id_and_osm_id"
    add_index "pois", ["osm_id"], :name => "index_pois_on_osm_id", :unique => true
    add_index "pois", ["region_id"], :name => "index_pois_on_region_id"
    add_index "pois", ["status"], :name => "index_pois_on_status"
    add_index "pois", ["tags"], :name => "index_pois_on_tags"

    create_table "provided_pois", :force => true do |t|
      t.integer  "poi_id",      :limit => 8, :null => false
      t.integer  "provider_id", :limit => 8, :null => false
      t.string   "wheelchair"
      t.string   "url"
      t.datetime "created_at"
      t.datetime "updated_at"
    end

    add_index "provided_pois", ["provider_id", "poi_id"], :name => "index_provided_pois_on_provider_id_and_poi_id", :unique => true

    create_table "providers", :force => true do |t|
      t.string   "name"
      t.datetime "created_at"
      t.datetime "updated_at"
    end

    create_table "queued_nodes", :force => true do |t|
      t.integer  "user_id"
      t.text     "node_attributes"
      t.datetime "created_at"
      t.datetime "updated_at"
      t.point    "geom",            :limit => nil, :srid => 0
    end

    add_index "queued_nodes", ["geom"], :name => "index_queued_nodes_on_geom", :spatial => true

    create_table "regions", :force => true do |t|
      t.string   "name"
      t.datetime "created_at"
      t.datetime "updated_at"
      t.geometry "grenze",      :limit => nil, :null => false, :srid => 0
      t.integer  "parent_id",   :limit => 8
      t.integer  "admin_level"
      t.integer  "lft"
      t.integer  "rgt"
      t.integer  "depth"
    end

    create_table "slugs", :force => true do |t|
      t.string   "name"
      t.integer  "sluggable_id",   :limit => 8
      t.integer  "sequence",                     :default => 1, :null => false
      t.string   "sluggable_type", :limit => 40
      t.string   "scope"
      t.datetime "created_at"
    end

    add_index "slugs", ["name", "sluggable_type", "sequence", "scope"], :name => "index_slugs_on_n_s_s_and_s", :unique => true
    add_index "slugs", ["sluggable_id"], :name => "index_slugs_on_sluggable_id"

    create_table "users", :force => true do |t|
      t.string   "oauth_token"
      t.string   "oauth_secret"
      t.string   "email"
      t.string   "encrypted_password"
      t.string   "password_salt",                           :default => "",    :null => false
      t.string   "remember_token"
      t.datetime "remember_created_at"
      t.integer  "sign_in_count",                           :default => 0
      t.datetime "current_sign_in_at"
      t.datetime "last_sign_in_at"
      t.string   "current_sign_in_ip"
      t.string   "last_sign_in_ip"
      t.integer  "changeset_id",               :limit => 8
      t.datetime "created_at"
      t.datetime "updated_at"
      t.string   "authentication_token"
      t.boolean  "wants_newsletter",                        :default => false, :null => false
      t.string   "confirmation_token"
      t.datetime "confirmed_at"
      t.datetime "confirmation_sent_at"
      t.integer  "osm_id",                     :limit => 8
      t.string   "first_name"
      t.string   "last_name"
      t.integer  "create_counter",                          :default => 0,     :null => false
      t.integer  "edit_counter",                            :default => 0,     :null => false
      t.string   "osm_username"
      t.integer  "tag_counter",                             :default => 0,     :null => false
      t.integer  "photos_count",                            :default => 0,     :null => false
      t.boolean  "terms",                                   :default => false, :null => false
      t.datetime "accepted_at"
      t.boolean  "privacy_policy",                          :default => false, :null => false
      t.datetime "privacy_policy_accepted_at"
      t.string   "reset_password_token"
      t.datetime "reset_password_sent_at"
    end

    add_index "users", ["authentication_token"], :name => "index_users_on_authentication_token", :unique => true
    add_index "users", ["oauth_token"], :name => "index_users_on_oauth_token"
    add_index "users", ["wants_newsletter"], :name => "index_users_on_wants_newsletter"

  end

  def self.down
    raise ActiveRecord::IrreversibleMigration
  end
end
