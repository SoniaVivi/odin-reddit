class CreateSubscriptions < ActiveRecord::Migration[6.1]
  def change
    create_table :subscriptions do |t|
      t.references :subscriber, foreign_key: { to_table: :users }
      t.references :origin, foreign_key: true
      t.timestamps
    end
  end
end
