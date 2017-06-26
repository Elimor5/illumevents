class EventTicket < ActiveRecord::Base
  validates :event_id, :type, :price, :max_quantity, presence: true
end
