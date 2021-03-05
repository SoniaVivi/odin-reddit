class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.references :poster, foreign_key: { to_table: :users }
      t.references :post, foreign_key: true
      t.references :parent, foreign_key: { to_table: :users }
      t.timestamps
    end

    add_reference :posts, :comments, foreign_key: true
  end
end
