class AddPosterAndOrigin < ActiveRecord::Migration[6.1]
  def change
    add_reference :posts, :poster, foreign_key: { to_table: :users }

    create_table :origins do |t|
      t.string :title
      t.references :creator, foreign_key: { to_table: :users }
    end

    create_table :moderator_origins do |t|
      t.references :origin, foreign_key: true
      t.references :moderator, foreign_key: { to_table: :users }
    end
  end
end
