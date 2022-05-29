class Bookmark < ApplicationRecord

  validates :comment, length: { minimum: 6 }
  validates :movie_id, uniqueness: { scope: :list_id, message: "is already in the list" }
end
