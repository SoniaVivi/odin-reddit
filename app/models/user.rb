class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  validates :name, presence: true
  validates :name, length: { in: 3..24}
  validates :name, uniqueness: true

  has_many :posts, foreign_key: 'poster_id'
  has_many :moderator_origins, foreign_key: 'moderator_id'
  has_many :origins, through: :moderator_origins
end
