class Vote < ApplicationRecord
  belongs_to :user
  belongs_to :voteable, polymorphic: true

  belongs_to :original_poster, class_name: 'User', optional: true
  validates_uniqueness_of :user_id, scope: %i[voteable_type voteable_id]
  after_create :on_create
  before_destroy :on_destroy
  scope :poster, -> { voteable.poster }

  private

  def on_create
    score_change = vote_type == 'up' ? 1 : -1
    voteable.update(score: voteable.score + score_change)
    self.update(original_poster_id: voteable.poster_id)
  end
  def on_destroy
    score_change = vote_type == 'up' ? -1 : 1
    voteable.update(score: voteable.score + score_change)
  end
end
