class EventTicket < ApplicationRecord
  validates :event, :ticket_type, :price, :max_quantity, presence: true

  belongs_to :event,
    foreign_key: :event_id,
    class_name: :Event,
    inverse_of: :event_tickets

  has_many :ticket_purchases

end
