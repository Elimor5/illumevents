class Event < ActiveRecord::Base
  validates :host_id, :title, :venue, :address, :city_state_zip, :date, :time, :ticket_price, :ticket_quantity, presence: true

  belongs_to :host,
  foreign_key: :host_id,
  class_name: :User


end
