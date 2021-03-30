class Text < ApplicationRecord
  validates :description, presence: true
  validates :description, length: { in: 1..10_000 }

  has_one :post, as: :subject

  def get_data
    { description: description }
  end
end
