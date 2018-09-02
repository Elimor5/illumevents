class ChangeDateFormat < ActiveRecord::Migration
  def change
    remove_column :events, :date 
    add_column :events, :date, :datetime, null: false
  end
end
