class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.integer :host_id, null: false
      t.string :title, null: false
      t.string :venue, null: false
      t.string :address, null: false
      t.string :city_state_zip, null: false
      t.string :date, null: false
      t.string :time, null: false
      t.text :description
      t.integer :ticket_price, null: false
      t.integer :ticket_quantity, null: false
      t.timestamps null: false
    end
    add_index :events, :host_id
    add_index :events, :date
    add_index :events, :ticket_price
  end
end
