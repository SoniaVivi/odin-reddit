class Post < ApplicationRecord
  validates :title, length: { in: 1..256 }
  validates :description, length: { in: 0..10_000 }

  belongs_to :poster, class_name: 'User'
  belongs_to :origin
end
