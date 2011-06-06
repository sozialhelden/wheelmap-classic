# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20110513152131) do

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
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.integer  "failed_attempts",                     :default => 0
    t.string   "unlock_token"
    t.datetime "locked_at"
  end

  add_index "admins", ["confirmation_token"], :name => "index_admins_on_confirmation_token"
  add_index "admins", ["email"], :name => "index_admins_on_email"
  add_index "admins", ["reset_password_token"], :name => "index_admins_on_reset_password_token"
  add_index "admins", ["unlock_token"], :name => "index_admins_on_unlock_token"

  create_table "categories", :force => true do |t|
    t.string   "identifier"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "countries", :primary_key => "OGR_FID", :options=>'ENGINE=MyISAM', :force => true do |t|
    t.geometry "geom",      :limit => nil,                                :null => false
    t.string   "fips",      :limit => 2
    t.string   "iso2",      :limit => 2
    t.string   "iso3",      :limit => 3
    t.decimal  "un",                       :precision => 3,  :scale => 0
    t.string   "name",      :limit => 50
    t.decimal  "area",                     :precision => 7,  :scale => 0
    t.decimal  "pop2005",                  :precision => 10, :scale => 0
    t.decimal  "region",                   :precision => 3,  :scale => 0
    t.decimal  "subregion",                :precision => 3,  :scale => 0
    t.float    "lon",       :limit => 8
    t.float    "lat",       :limit => 7
  end

  add_index "countries", ["OGR_FID"], :name => "OGR_FID"
  add_index "countries", ["geom"], :name => "geom", :spatial => true

  create_table "delayed_jobs", :force => true do |t|
    t.integer  "priority",         :default => 0
    t.integer  "attempts",         :default => 0
    t.text     "handler"
    t.text     "last_error"
    t.datetime "run_at"
    t.datetime "locked_at"
    t.datetime "failed_at"
    t.string   "locked_by"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.datetime "first_started_at"
    t.datetime "last_started_at"
    t.datetime "finished_at"
  end

  add_index "delayed_jobs", ["priority", "run_at"], :name => "delayed_jobs_priority"

  create_table "node_types", :force => true do |t|
    t.integer  "category_id"
    t.string   "identifier"
    t.string   "osm_key"
    t.string   "icon"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "pois", :primary_key => "osm_id", :options=>'ENGINE=MyISAM', :force => true do |t|
    t.integer  "version",                   :null => false
    t.text     "tags",                      :null => false
    t.point    "geom",       :limit => nil, :null => false
    t.integer  "status",     :limit => 3
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "pois", ["geom"], :name => "index_pois_on_geom", :spatial => true
  add_index "pois", ["osm_id", "status", "created_at"], :name => "pagination"
  add_index "pois", ["osm_id"], :name => "index_pois_on_osm_id"
  add_index "pois", ["status"], :name => "index_pois_on_status"
  execute "CREATE FULLTEXT INDEX `fulltext_index_pois_on_tags` ON `pois` (`tags`)"

  create_table "sessions", :force => true do |t|
    t.string   "session_id", :null => false
    t.text     "data"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "sessions", ["session_id"], :name => "index_sessions_on_session_id"
  add_index "sessions", ["updated_at"], :name => "index_sessions_on_updated_at"

  create_table "tolk_locales", :force => true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "tolk_locales", ["name"], :name => "index_tolk_locales_on_name"

  create_table "tolk_phrases", :force => true do |t|
    t.text     "key"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "tolk_translations", :force => true do |t|
    t.integer  "phrase_id"
    t.integer  "locale_id"
    t.text     "text",            :limit => 16777215
    t.text     "previous_text",   :limit => 16777215
    t.boolean  "primary_updated",                     :default => false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "tolk_translations", ["phrase_id", "locale_id"], :name => "index_tolk_translations_on_phrase_id_and_locale_id"

  create_table "users", :force => true do |t|
    t.string   "users"
    t.string   "oauth_token"
    t.string   "oauth_secret"
    t.string   "email",                               :default => "",    :null => false
    t.string   "encrypted_password",   :limit => 128, :default => "",    :null => false
    t.string   "password_salt",                       :default => "",    :null => false
    t.string   "reset_password_token"
    t.string   "remember_token"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",                       :default => 0
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "osm_username"
    t.string   "osm_password"
    t.integer  "changeset_id"
    t.string   "authentication_token"
    t.text     "oauth_request_token"
    t.boolean  "wants_newsletter",                    :default => false, :null => false
  end

  add_index "users", ["authentication_token"], :name => "index_users_on_authentication_token"
  add_index "users", ["email"], :name => "index_users_on_email"
  add_index "users", ["oauth_token"], :name => "index_users_on_oauth_token"
  add_index "users", ["reset_password_token"], :name => "index_users_on_reset_password_token"
  add_index "users", ["wants_newsletter"], :name => "index_users_on_wants_newsletter"

end
