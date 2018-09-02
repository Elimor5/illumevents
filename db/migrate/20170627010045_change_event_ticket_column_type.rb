class ChangeEventTicketColumnType < ActiveRecord::Migration
  def change
    rename_column :event_tickets, :type, :event_type
  end
end
