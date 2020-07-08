class RacesController < ApplicationController

	def index
		@races = Race.all

		render json: @races, status: 200
	end

end
