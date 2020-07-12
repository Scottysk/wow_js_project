class LandsController < ApplicationController

	def index
		lands = Land.all

		render json: lands
	end

	def show
		land = Land.find(params[:id])

		render json: land, status: 200
	end

	def create
		land = Land.create(land_params)
		if land.valid?
			render json: land
		else
			render json: {error: "Land not valid"}
		end
	end

	private

	def land_params
		params.require(:land).permit(:name, :description)
	end




end
