class AddOriginToPost < ActiveRecord::Migration[6.1]
  def change
    add_reference :posts, :origin, foreign_key: true
  end
end
