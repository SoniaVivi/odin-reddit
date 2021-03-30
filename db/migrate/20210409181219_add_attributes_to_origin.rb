class AddAttributesToOrigin < ActiveRecord::Migration[6.1]
  def change
    change_table :origins do |t|
      t.text :description
      t.boolean :nsfw, default: false
      t.string :community_type, default: 'public'
    end
  end
end
