class Event < ActiveRecord::Base
  validates :host_id, :title, :venue, :address, :city_state_zip, :date, :category, :time, presence: true

  has_attached_file :image, :s3_protocol => :https, default_url: ""
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

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:NE][:lat])
    .where("lng < ?", bounds[:NE][:lng])
    .where("lat > ?", bounds[:SW][:lat])
    .where("lng > ?", bounds[:SW][:lng])
  end

  def self.filter_by_date(filter)
    next_week = Date.today.next_week
    case filter
    when "Today"
      self.where(date: Date.today)
    when "Tomorrow"
      self.where(date: Date.today + 1)
    when "This Week"
      start_date = Date.today
      end_date = next_week - 2
      self.where(date: start_date..end_date)
    when "This Weekend"
      sat = Date.today.next_week - 2
      sun = sat + 1
      self.where(date: sat..sun)
    when "Next Week"
      self.where(date: next_week - 1..next_week + 6)
    when "This Month"
      start_date = Date.today.at_beginning_of_month.next_month
      end_date = start_date.next_month
      self.where(date: Date.today..end_date)
    else
      dates = filter.split("_")
      start_date = Date.parse(dates.first)
      end_date = Date.parse(dates.last)
      self.where(date: start_date..end_date)
    end
  end


end
