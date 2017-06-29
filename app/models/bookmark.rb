class Bookmark < ActiveRecord::Base
  validates :user, :event

  belongs_to :user
  belongs_to :event
end
