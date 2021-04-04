class RemoveForeignKeysReferencingPost < ActiveRecord::Migration[6.1]
  def change
    remove_foreign_key :comments, :posts
  end
end
