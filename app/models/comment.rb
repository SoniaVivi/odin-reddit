class Comment < ApplicationRecord
  validates :poster, :post, presence: true
  belongs_to :poster, class_name: 'User'
  belongs_to :post
  belongs_to :parent, class_name: 'Comment', optional: true

  has_many :children, class_name: 'Comment', foreign_key: 'parent_id'

  def get_tree
    return [self.get_data] if children.length == 0
    child_comments = []
    children.each { |child_comment| child_comments << child_comment.get_tree }
    return self.get_data, child_comments
  end
  def get_data
    {
      poster: poster.name,
      body: body,
      created_at: created_at.strftime('%FT%H:%M:%S'),
      id: id,
    }
  end
end
