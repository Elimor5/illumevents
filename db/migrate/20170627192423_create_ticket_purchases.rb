class CreateTicketPurchases < ActiveRecord::Migration
  def change
    create_table :ticket_purchases do |t|
      t.integer :buyer_id, null: false
      t.integer :ticket_id, null: false
      t.integer :purchase_quantity, null: false
      t.timestamps null: false
    end
  end
end
