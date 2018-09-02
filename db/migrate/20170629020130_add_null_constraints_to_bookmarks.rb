class AddNullConstraintsToBookmarks < ActiveRecord::Migration
  def change
    change_column :bookmarks, :user_id, :integer, null: false
    change_column :bookmarks, :event_id, :integer, null: false 
  end
end
