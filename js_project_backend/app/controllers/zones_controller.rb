class ZonesController < ApplicationController

	def index
		zones = Zone.all

		render json: zones
	end


	def show 
		zone = Zone.find(params[:id])

		render json: zone
	end

	def create
		zone = Zone.create(zone_params)
		if zone.valid?
			render json: zone
		else
			render json: {error: "Zone not valid"}
		end
	end

	def zone_params
		params.require(:zone).permit(:id, :name, :description, :land_id)
	end


end
