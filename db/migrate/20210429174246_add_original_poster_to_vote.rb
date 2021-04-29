class AddOriginalPosterToVote < ActiveRecord::Migration[6.1]
  def change
    add_column :votes, :original_poster_id, :integer
  end
end
