class RemoveEventTicketsCol < ActiveRecord::Migration
  def change
    remove_column :events, :ticket_price
    remove_column :events, :ticket_quantity
  end
end
