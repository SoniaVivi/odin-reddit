class Comment < ApplicationRecord
  validates :poster, :post, presence: true
  validates_with CommentValidator
  after_create :new_vote_for_comment

  belongs_to :poster, class_name: 'User'
  belongs_to :post
  belongs_to :parent, class_name: 'Comment', optional: true

  has_many :children, class_name: 'Comment', foreign_key: 'parent_id'
  has_many :votes, as: :voteable

  def get_tree(current_user_id = nil, sort = { score: :desc })
    return [self.get_data(current_user_id)] if children.length == 0
    child_comments = []
    children
      .order(sort)
      .each do |child_comment|
        child_comments << child_comment.get_tree(current_user_id)
      end
    return self.get_data(current_user_id), child_comments
  end

  def get_data(user_id = nil)
    {
      poster: poster.name,
      poster_id: poster.id,
      body: body,
      created_at: created_at.strftime('%FT%H:%M:%S'),
      id: id,
      score: score,
      parent_id: parent_id,
      vote_type: get_vote(user_id),
    }
  end

  private

  def get_vote(id)
    return nil if id.nil? || !votes.exists?(user_id: id)

    votes.where(user_id: id)[0].vote_type
  end
  def new_vote_for_comment
    Vote.create(
      user_id: poster.id,
      voteable_type: 'Comment',
      voteable_id: id,
      vote_type: 'up',
    )
  end
end
