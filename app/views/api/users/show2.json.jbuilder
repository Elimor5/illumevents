json.extract! @user, :id, :username, :ticket_purchases
json.bookmarked_events @bookmarked_event_ids
json.events @user.events.each do |event|
  json.extract! event, :id, :title, :description, :category,  :date, :time, :host_id, :venue, :address, :city_state_zip, :event_tickets
  json.image_url asset_path(event.image.url)
end
