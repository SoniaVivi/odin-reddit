# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

def generate_random_number
  rand(10_000)
end

test_user =
  User.create email: 'test@test.com',
              password: 'test_password',
              password_confirmation: 'test_password',
              name: 'test_user_555'

test_origin = Origin.create title: 'test-origin', creator_id: test_user.id

titles =
  [
    'Labrador Retriever',
    'German Shepherd',
    'Golden Retriever',
    'French Bulldogs',
    'Bulldogs',
    'Poodles',
    'Beagles',
    'Rottweilers',
    'German Shorthaired Pointer',
    'Pembroke Welsh Corgi',
  ].map { |t| "Attack of the #{t}" }

titles.each_with_index do |title, i|
  text = Text.create(description: 'In a dog park far, far away')
  Post.create!(
    title: title,
    score: generate_random_number,
    origin_id: test_origin.id,
    poster_id: test_user.id,
    subject_type: 'Text',
    subject_id: text.id,
  )
end
Post.all.each do |post|
  Comment.create!(
    poster_id: 1,
    post_id: post.id,
    body: "Run! An #{post.title} is incoming!",
    score: generate_random_number,
  )
  Comment.create!(
    poster_id: 1,
    post_id: post.id,
    body: "Run! An #{post.title} is incoming!",
    score: generate_random_number,
  )
  com =
    Comment.create!(
      poster_id: 1,
      post_id: post.id,
      body: "Run! An #{post.title} is incoming!",
      score: generate_random_number,
    )

  com =
    Comment.create!(
      poster_id: 1,
      post_id: post.id,
      body: "Run! An #{post.title} is incoming! 2",
      score: generate_random_number,
      parent_id: com.id,
    )

  Comment.create!(
    poster_id: 1,
    post_id: post.id,
    body: "Run! An #{post.title} is incoming! 3",
    score: generate_random_number,
    parent_id: com.id,
  )

  Comment.create!(
    poster_id: 1,
    post_id: post.id,
    body: "Run! An #{post.title} is incoming! 3",
    score: generate_random_number,
    parent_id: com.id,
  )

  Comment.create!(
    poster_id: 1,
    post_id: post.id,
    body: "Run! An #{post.title} is incoming! 3",
    score: generate_random_number,
    parent_id: com.id,
  )

  Comment.create!(
    poster_id: 1,
    post_id: post.id,
    body: "Run! An #{post.title} is incoming!",
    score: generate_random_number,
  )
end
