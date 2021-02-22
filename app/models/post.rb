class Post < ApplicationRecord
  validates :title, length: { in: 1..256 }
  validates :description, length: { in: 0..10_000 }
end
