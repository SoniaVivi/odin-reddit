class SetScoreDefaultForCommentAndPost < ActiveRecord::Migration[6.1]
  def change
    change_column :comments, :score, :integer, default: 0
    change_column :posts, :score, :integer, default: 0
  end
end
