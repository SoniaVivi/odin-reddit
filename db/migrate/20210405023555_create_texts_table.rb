class CreateTextsTable < ActiveRecord::Migration[6.1]
  def change
    remove_column :posts, :description

    create_table :texts do |t|
      t.text :description
      t.timestamps
    end
  end
end
