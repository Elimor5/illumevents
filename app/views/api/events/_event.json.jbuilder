json.extract! event, :id, :title, :description, :category,  :date, :time, :host_id, :venue, :address, :city_state_zip, :event_tickets
json.image_url asset_path(event.image.url)
