class Post < ApplicationRecord
  validates :title, length: { in: 1..256 }
  validates :description, length: { in: 0..10_000 }

  belongs_to :poster, class_name: 'User'
  belongs_to :origin

  def get_data
    {
      created_at: created_at.strftime('%FT%T'),
      description: description,
      origin: origin.title,
      poster: poster.name,
      score: score,
      subject_id: subject_id,
      post_type: subject_type,
      title: title,
      edited: updated_at,
    }
  end
end
