@event_tickets.each do |event_ticket|
  json.extract! event_ticket, :id, :type, :price, :event_id, :max_quantity
end
