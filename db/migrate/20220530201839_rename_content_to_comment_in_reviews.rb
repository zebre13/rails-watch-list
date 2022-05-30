class RenameContentToCommentInReviews < ActiveRecord::Migration[6.1]
  def change
    rename_column :reviews, :content, :comment
  end
end
