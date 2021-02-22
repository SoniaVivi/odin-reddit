# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
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
  Post.create(title: title, description: title * 9, score: rand(10_000))
end
