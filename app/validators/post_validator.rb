class PostValidator < ActiveModel::Validator
  def validate(record)
    if record.subject_type != 'Text' && description != nil
      record.errors.add :base, 'Must not have description if not text post'
    end
  end
end
