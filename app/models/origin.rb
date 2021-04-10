class Origin < ApplicationRecord
  validates :title, uniqueness: true
  validates :title, length: { in: 3..32 }
  has_many :posts
end
