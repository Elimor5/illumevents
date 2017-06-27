class ChangeEventTicketQuantity < ActiveRecord::Migration
  def change
    remove_column :event_tickets, :max_quantity
    add_column :event_tickets, :max_quantity, :integer, null: false
  end
end
