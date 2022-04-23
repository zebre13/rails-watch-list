class AddReferenccesToBookmark < ActiveRecord::Migration[6.1]
  def change
    add_reference :bookmarks, :movie, index: true
    add_reference :bookmarks, :list, index: true
  end
end
