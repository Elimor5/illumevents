class TicketPurchase < ActiveRecord::Base
  validates: :buyer, :ticket, :purchase_quantity

  belongs_to :event_ticket,
    foreign_key: :ticket_id,
    className: :EventTicket

  belongs_to :event,
    through: :event_ticket,
    source: :event

  belongs_to :ticket_purchaser,
    foreign_key: :buyer_id,
    class_name: :User
end
