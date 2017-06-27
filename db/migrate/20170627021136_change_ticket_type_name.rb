class ChangeTicketTypeName < ActiveRecord::Migration
  def change
    rename_column :event_tickets, :event_type, :ticket_type
  end
end
