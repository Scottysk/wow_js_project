class Land < ApplicationRecord
	has_many :zones
	validates :name, presence: true
end
