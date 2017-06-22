@events.each do |event|
  json.set! event.id do
    json.extract! event, :title, :description, :date, :time, :user_id, :ticket_price, :ticket_price, :ticket_id, :bookmark_id, :venue, :address, :city_state_zip
  end
end
