class Post < ApplicationRecord
  validates :title, length: { in: 1..256 }
  validates :description, length: { in: 0..10_000 }

  belongs_to :poster, class_name: 'User'
  belongs_to :origin
  has_many :comments
  has_many :votes, as: :voteable

  def get_data(user_id = nil)
    {
      created_at: created_at.strftime('%FT%H:%M:%S'),
      description: description,
      origin: origin.title,
      poster: poster.name,
      score: score,
      subject_id: subject_id,
      post_type: subject_type,
      title: title,
      edited: updated_at,
      comment_quantity: comments.length,
      id: id,
      vote_type: get_vote(user_id),
    }
  end
  def get_vote(id)
    return nil if id.nil? || !votes.exists?(user_id: id)

    votes.where(user_id: id)[0].vote_type
  end
end
