class TicketPurchase < ApplicationRecord
  validates :buyer, :ticket, :purchase_quantity, presence: true

  belongs_to :ticket,
    foreign_key: :ticket_id,
    class_name: :EventTicket

  has_one :event,
    through: :ticket,
    source: :event

  belongs_to :buyer,
    foreign_key: :buyer_id,
    class_name: :User
end
