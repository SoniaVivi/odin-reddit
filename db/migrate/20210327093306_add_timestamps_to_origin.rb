class AddTimestampsToOrigin < ActiveRecord::Migration[6.1]
  def change
    add_column :origins, :created_at, :timestamp, precision: 6
  end
end
