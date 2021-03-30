class CreateLinkTable < ActiveRecord::Migration[6.1]
  def change
    create_table :links do |t|
      t.string :url
      t.string :domain
      t.timestamps
    end
  end
end
