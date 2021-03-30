class Vote < ApplicationRecord
  belongs_to :user
  belongs_to :voteable, polymorphic: true
  validates_uniqueness_of :user_id, scope: %i[voteable_type voteable_id]
  after_create :on_create
  before_destroy :on_destroy

  private

  def on_create
    score_change = vote_type == 'up' ? 1 : -1
    voteable.update(score: voteable.score + score_change)
  end
  def on_destroy
    score_change = vote_type == 'up' ? -1 : 1
    voteable.update(score: voteable.score + score_change)
  end
end
