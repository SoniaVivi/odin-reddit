class AddTypeToVote < ActiveRecord::Migration[6.1]
  def change
    add_column :votes, :vote_type, :string, null: false
  end
end
