class LandsController < ApplicationController

	def index
		@lands = Land.all

		render json: @lands, status: 200
	end

	def show
		@land = Land.find(params[:id])

		render json: @land, status: 200
	end




end
