class Comment < ApplicationRecord
  validates :poster, :post, presence: true
  belongs_to :poster, class_name: 'User'
  belongs_to :post
  belongs_to :parent, class_name: 'Comment'

  has_many :children, class_name: 'Comment'
end
