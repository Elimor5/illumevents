json.partial! "api/events/event", event: @event
json.extract! @user, :username
