class RemoveUniqueConstraintEventTicketType < ActiveRecord::Migration
  def change
    remove_index :event_tickets, :event_id
    add_index :event_tickets, :event_id
  end
end
