class TicketPurchase < ActiveRecord::Base
  validates :buyer, :ticket, :purchase_quantity, presence: true

  belongs_to :ticket,
    foreign_key: :ticket_id,
    class_name: :EventTicket

  has_one :event,
    through: :event_ticket,
    source: :event

  belongs_to :buyer,
    foreign_key: :buyer_id,
    class_name: :User
end
