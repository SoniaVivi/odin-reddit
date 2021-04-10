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
  has_many :comments, foreign_key: 'poster_id'
  has_many :commentted_posts, through: :comments, source: :post
  has_many :votes

  def get_subscriptions
    user_subscriptions = {}
    subscriptions.each do |subscription|
      title = subscription.origin.title
      user_subscriptions[title] = "/f/#{title}"
    end
    user_subscriptions
  end
  def to_param
    "/user/#{name}"
  end
  def comment_previews(user_id=nil)
    previews = {}
    commentted_posts.order(created_at: :desc).each do |post|
      previews[post.id] = {
        origin: post.origin.title,
        post: post.get_data(user_id),
        self_post: post.poster.id == id,
        comment_data: post.comments.where(poster_id: id).map do |comment|
            {comment: comment.get_data(user_id),
             parent: comment.parent && comment.parent.get_data(user_id)}
          end
      }
    end
    previews
  end
  def post_previews(remove_commentted_posts=false, user_id=nil)
    previews = {}
    if remove_commentted_posts
      (posts.order(created_at: :desc) - commentted_posts.order(created_at: :desc))
    else
      posts.order(created_at: :desc)
    end
    .each do |post|
      previews[post.id] = {post: post.get_data(user_id), self_post: true}
    end
    previews
  end
end
