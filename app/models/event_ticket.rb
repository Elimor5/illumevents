class EventTicket < ActiveRecord::Base
  validates :event_id, :ticket_type, :price, :max_quantity, presence: true

  belongs_to :event,
  foreign_key: :event_id,
  class_name: :Event
end
