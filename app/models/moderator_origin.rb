class ModeratorOrigin < ApplicationRecord
  belongs_to :moderator, class_name: 'User', foreign_key: 'moderator_id'
  belongs_to :origin
end
