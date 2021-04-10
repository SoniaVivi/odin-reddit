class Origin < ApplicationRecord
  validates :title, uniqueness: true
  validates :title, length: { in: 3..32 }
  has_many :posts
  has_many :moderator_origins
  has_many :moderators, through: :moderator_origins
  has_many :subscriptions
  has_many :subscribers, through: :subscriptions
  def get_rank(days = 1)
    {
      count:
        subscriptions.where('created_at >= ?', Time.zone.now - days.days).count,
      title: title,
    }
  end
  after_create do
    ModeratorOrigin.create(origin_id: id, moderator_id: creator_id)
    Subscription.create(origin_id: id, subscriber_id: creator_id)
  end
  def title=(val)
    write_attribute(:title, val.downcase)
  end
end
# watching your runs over the years, I've learned that the incorrect way to pet a big ol' pupper is probably with a halbred. P.S. Happy birthday squilla!
