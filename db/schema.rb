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
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170919225907) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bookmarks", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "event_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["event_id"], name: "index_bookmarks_on_event_id", using: :btree
    t.index ["user_id"], name: "index_bookmarks_on_user_id", using: :btree
  end

  create_table "event_tickets", force: :cascade do |t|
    t.string   "ticket_type",  null: false
    t.integer  "price",        null: false
    t.integer  "event_id",     null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.integer  "max_quantity", null: false
    t.index ["event_id"], name: "index_event_tickets_on_event_id", using: :btree
  end

  create_table "events", force: :cascade do |t|
    t.integer  "host_id",            null: false
    t.string   "title",              null: false
    t.string   "venue",              null: false
    t.string   "address",            null: false
    t.string   "city_state_zip",     null: false
    t.string   "time",               null: false
    t.text     "description"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "category"
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.bigint   "image_file_size"
    t.datetime "image_updated_at"
    t.float    "lat"
    t.float    "lng"
    t.datetime "date",               null: false
    t.index ["host_id"], name: "index_events_on_host_id", using: :btree
  end

  create_table "ticket_purchases", force: :cascade do |t|
    t.integer  "buyer_id",          null: false
    t.integer  "ticket_id",         null: false
    t.integer  "purchase_quantity", null: false
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end
