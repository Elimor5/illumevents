class CreateEventTickets < ActiveRecord::Migration
  def change
    create_table :event_tickets do |t|
      t.string :type, null: false
      t.integer :price, null: false
      t.integer :event_id, null: false
      t.string :max_quantity, null: false
      t.timestamps null: false
    end
    add_index :event_tickets, :event_id, unique: true, using: :btree
  end
end
