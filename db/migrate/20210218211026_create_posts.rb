class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.string :title
      t.text :description
      t.integer :score
      t.integer :subject_id
      t.string :subject_type

      t.timestamps
    end
  end
end
