class InitialSchema < ActiveRecord::Migration

  def self.up

    create_table "admins", :force => true do |t|
      t.string   "email",                               :default => "", :null => false
      t.string   "encrypted_password",   :limit => 128, :default => "", :null => false
      t.string   "password_salt",                       :default => "", :null => false
      t.string   "reset_password_token"
      t.string   "remember_token"
      t.datetime "remember_created_at"
      t.integer  "sign_in_count",                       :default => 0
      t.datetime "current_sign_in_at"
      t.datetime "last_sign_in_at"
      t.string   "current_sign_in_ip"
      t.string   "last_sign_in_ip"
      t.string   "confirmation_token"
      t.datetime "confirmed_at"
      t.datetime "confirmation_sent_at"
      t.integer  "failed_attempts",                     :default => 0
      t.string   "unlock_token"
      t.datetime "locked_at"
      t.timestamps 
    end

    add_index "admins", ["confirmation_token"], :name => "index_admins_on_confirmation_token", :unique => true
    add_index "admins", ["email"], :name => "index_admins_on_email", :unique => true
    add_index "admins", ["reset_password_token"], :name => "index_admins_on_reset_password_token", :unique => true
    add_index "admins", ["unlock_token"], :name => "index_admins_on_unlock_token", :unique => true

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
      t.timestamps
    end

    add_index "delayed_jobs", ["priority", "run_at"], :name => "delayed_jobs_priority"

    # MySQL:
    # create_table "pois", :primary_key => "osm_id", :options => "ENGINE=MyISAM", :id => false, :force => true do |t|
    create_table "pois", :primary_key => "osm_id", :id => false, :force => true do |t|
      t.integer  "osm_id",                                   :null => false, :key => false 
      t.integer  "version",                                  :null => false
      t.text     "tags",                                     :null => false
      t.point    "geom",                                     :null => false
      t.integer  "status",     :limit => 3,   :default => 8, :null => false
      t.timestamps
    end

    add_index "pois", ["geom"], :name => "index_pois_on_geom", :length => {"geom"=>32}, :spatial => true
    add_index "pois", ["osm_id"], :name => "index_pois_on_osm_id", :unique => true
    add_index "pois", ["status"], :name => "index_pois_on_status"

    create_table "sessions", :force => true do |t|
      t.string   "session_id", :null => false
      t.text     "data"
      t.timestamps
    end

    add_index "sessions", ["session_id"], :name => "index_sessions_on_session_id"
    add_index "sessions", ["updated_at"], :name => "index_sessions_on_updated_at"

    create_table "tolk_locales", :force => true do |t|
      t.string   "name"
      t.timestamps
    end

    add_index "tolk_locales", ["name"], :name => "index_tolk_locales_on_name", :unique => true

    create_table "tolk_phrases", :force => true do |t|
      t.text     "key"
      t.timestamps
    end

    create_table "tolk_translations", :force => true do |t|
      t.integer  "phrase_id"
      t.integer  "locale_id"
      t.text     "text"
      t.text     "previous_text"
      t.boolean  "primary_updated", :default => false
      t.timestamps
    end

    add_index "tolk_translations", ["phrase_id", "locale_id"], :name => "index_tolk_translations_on_phrase_id_and_locale_id", :unique => true

    create_table "users", :force => true do |t|
      t.string   "users"
      t.string   "oauth_token"
      t.string   "oauth_secret"
      t.string   "email",                               :default => "", :null => false
      t.string   "encrypted_password",   :limit => 128, :default => "", :null => false
      t.string   "password_salt",                       :default => "", :null => false
      t.string   "reset_password_token"
      t.string   "remember_token"
      t.datetime "remember_created_at"
      t.integer  "sign_in_count",                       :default => 0
      t.datetime "current_sign_in_at"
      t.datetime "last_sign_in_at"
      t.string   "current_sign_in_ip"
      t.string   "last_sign_in_ip"
      t.string   "osm_username"
      t.string   "osm_password"
      t.integer  "changeset_id"
      t.timestamps
    end

    add_index "users", ["email"], :name => "index_users_on_email", :unique => true
    add_index "users", ["oauth_token"], :name => "index_users_on_oauth_token"
    add_index "users", ["reset_password_token"], :name => "index_users_on_reset_password_token", :unique => true
  end

  def self.down
    raise ActiveRecord::IrreversibleMigration
  end
end
