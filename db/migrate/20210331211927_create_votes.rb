class CreateVotes < ActiveRecord::Migration[6.1]
  def change
    create_table :votes do |t|
      t.references :user, foreign_key: true
      t.references :voteable, polymorphic: true
      t.timestamps
    end
  end
end
