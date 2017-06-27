@event_tickets.each do |event_ticket|
  json.set! event_ticket.id do
    json.partial! "api/event_ticket_tickets/event_ticket", event_ticket: event_ticket
  end
end
