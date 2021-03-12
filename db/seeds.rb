# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

test_user =
  User.create email: 'test@example.com',
              password: 'test_password',
              password_confirmation: 'test_password',
              name: 'test_user_555'

test_origin = Origin.create title: 'test-origin', creator_id: test_user.id

titles = [
  'Canidae',
  'Felidae',
  'Cat',
  'Cattle',
  'Dog',
  'Donkey',
  'Goat',
  'Guinea pig',
  'Horse',
  'Pig',
  'Rabbit',
]
titles.each_with_index do |title, i|
  Post.create(
    title: title,
    description: title * 9,
    score: rand(10_000),
    origin_id: test_origin.id,
    poster_id: test_user.id,
    subject_type: 'text',
  )
end
Post.all.each do |post|
  Comment.create!(
    poster_id: 1,
    post_id: post.id,
    body: "Whazzzup #{post.title}",
  )
  Comment.create!(
    poster_id: 1,
    post_id: post.id,
    body: "Whazzzup #{post.title}",
  )
  com =
    Comment.create!(
      poster_id: 1,
      post_id: post.id,
      body: "Whazzzup #{post.title}",
    )

  com =
    Comment.create!(
      poster_id: 1,
      post_id: post.id,
      body: "Whazzzup #{post.title} 2",
      parent_id: com.id,
    )

  Comment.create!(
    poster_id: 1,
    post_id: post.id,
    body: "Whazzzup #{post.title} 3",
    parent_id: com.id,
  )

  Comment.create!(
    poster_id: 1,
    post_id: post.id,
    body: "Whazzzup #{post.title} 3",
    parent_id: com.id,
  )

  Comment.create!(
    poster_id: 1,
    post_id: post.id,
    body: "Whazzzup #{post.title} 3",
    parent_id: com.id,
  )

  Comment.create!(
    poster_id: 1,
    post_id: post.id,
    body: "Whazzzup #{post.title}",
  )
end
