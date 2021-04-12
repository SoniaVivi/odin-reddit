class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  validates :name, presence: true
  validates :name, length: { in: 3..24}
  validates :name, uniqueness: true

  has_many :posts, foreign_key: 'poster_id'
  has_many :moderator_origins, foreign_key: 'moderator_id'
  has_many :origins, through: :moderator_origins
  has_many :subscriptions, foreign_key: 'subscriber_id'
  has_many :subscribed_origins, through: :subscriptions, source: 'origin'

  def get_subscriptions
    user_subscriptions = {}
    subscriptions.each do |subscription|
      title = subscription.origin.title
      user_subscriptions[title] = "/f/#{title}"
    end
    user_subscriptions
  end
end
