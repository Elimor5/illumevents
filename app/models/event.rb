class Event < ActiveRecord::Base
  validates :host_id, :title, :venue, :address, :city_state_zip, :date, :category, :time, presence: true

  has_attached_file :image, default_url: "corgi.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  has_many :bookmarks

  has_many :subscribers,
    through: :bookmarks,
    source: :user

  belongs_to :host,
  foreign_key: :host_id,
  class_name: :User

  has_many :event_tickets,
  inverse_of: :event

  accepts_nested_attributes_for :event_tickets
end
