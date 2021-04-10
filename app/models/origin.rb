class Origin < ApplicationRecord
  after_create do
    ModeratorOrigin.create(origin_id: id, moderator_id: creator_id)
  end
  validates :title, uniqueness: true
  validates :title, length: { in: 3..32 }
  has_many :posts
  has_many :moderator_origins
  has_many :moderators, through: :moderator_origins
end
