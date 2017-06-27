class Event < ActiveRecord::Base
  validates :host_id, :title, :venue, :address, :city_state_zip, :date, :time, presence: true

  belongs_to :host,
  foreign_key: :host_id,
  class_name: :User

  has_many :event_tickets
  accepts_nested_attributes_for :event_tickets
end
