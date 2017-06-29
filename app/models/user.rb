class User < ActiveRecord::Base
  attr_reader :password

  after_initialize :ensure_session_token
	before_validation :ensure_session_token_uniqueness

  has_many :bookmarks

  has_many :events,
  foreign_key: :host_id,
  class_name: :Event,
  primary_key: :id

  has_many :ticket_purchases,
    foreign_key: :buyer_id,
    class_name: :TicketPurchase

  has_many :event_tickets,
    through: :ticket_purchases,
    source: :event_ticket

  has_many :events_attended,
    through: :event_tickets,
    source: :event

  has_many :bookmarked_events,
    through: :bookmarks,
    source: :event


	validates :username, :password_digest, :session_token, presence: true
	validates :username, uniqueness: true
	validates :password, length: {minimum: 6}, allow_nil: :true

  def password= password
		self.password_digest = BCrypt::Password.create(password)
		@password = password
	end

	def self.find_by_credentials username, password
		user = User.find_by(username: username)
		return nil unless user
		user.password_is?(password) ? user : nil
	end

	def password_is? password
		BCrypt::Password.new(self.password_digest).is_password?(password)
	end

	def reset_session_token!
		self.session_token = new_session_token
		ensure_session_token_uniqueness
		self.save
		self.session_token
	end

	private

	def ensure_session_token
		self.session_token ||= new_session_token
	end

	def new_session_token
		SecureRandom.base64
	end

	def ensure_session_token_uniqueness
		while User.find_by(session_token: self.session_token)
			self.session_token = new_session_token
		end
	end

end
