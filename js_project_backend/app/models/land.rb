class Land < ApplicationRecord
	validates :name, presence: true
	has_many :zone
end
