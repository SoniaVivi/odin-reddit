class Post < ApplicationRecord
  validates :title, length: { in: 1..256 }
  validates :description, length: { in: 1..10000}
end
