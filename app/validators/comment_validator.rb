class CommentValidator < ActiveModel::Validator
  def validate(record)
    if record.parent && record.parent.post.id != record.post.id
      record.errors.add :base, 'Parent.post.id must be the same as post.id'
    end
  end
end
