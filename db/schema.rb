# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_04_09_181219) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.bigint "poster_id"
    t.bigint "post_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.text "body"
    t.bigint "parent_id"
    t.integer "score", default: 0
    t.index ["parent_id"], name: "index_comments_on_parent_id"
    t.index ["post_id"], name: "index_comments_on_post_id"
    t.index ["poster_id"], name: "index_comments_on_poster_id"
  end

  create_table "links", force: :cascade do |t|
    t.string "url"
    t.string "domain"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "moderator_origins", force: :cascade do |t|
    t.bigint "origin_id"
    t.bigint "moderator_id"
    t.index ["moderator_id"], name: "index_moderator_origins_on_moderator_id"
    t.index ["origin_id"], name: "index_moderator_origins_on_origin_id"
  end

  create_table "origins", force: :cascade do |t|
    t.string "title"
    t.bigint "creator_id"
    t.datetime "created_at", precision: 6
    t.text "description"
    t.boolean "nsfw", default: false
    t.string "community_type", default: "public"
    t.index ["creator_id"], name: "index_origins_on_creator_id"
  end

  create_table "posts", force: :cascade do |t|
    t.string "title"
    t.integer "score", default: 0
    t.integer "subject_id"
    t.string "subject_type"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "poster_id"
    t.bigint "origin_id"
    t.bigint "comments_id"
    t.index ["comments_id"], name: "index_posts_on_comments_id"
    t.index ["origin_id"], name: "index_posts_on_origin_id"
    t.index ["poster_id"], name: "index_posts_on_poster_id"
  end

  create_table "texts", force: :cascade do |t|
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "name"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  create_table "votes", force: :cascade do |t|
    t.bigint "user_id"
    t.string "voteable_type"
    t.bigint "voteable_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "vote_type", null: false
    t.index ["user_id"], name: "index_votes_on_user_id"
    t.index ["voteable_type", "voteable_id"], name: "index_votes_on_voteable"
  end

  add_foreign_key "comments", "comments", column: "parent_id"
  add_foreign_key "comments", "users", column: "poster_id"
  add_foreign_key "moderator_origins", "origins"
  add_foreign_key "moderator_origins", "users", column: "moderator_id"
  add_foreign_key "origins", "users", column: "creator_id"
  add_foreign_key "posts", "comments", column: "comments_id"
  add_foreign_key "posts", "origins"
  add_foreign_key "posts", "users", column: "poster_id"
  add_foreign_key "votes", "users"
end
