class LandSerializer < ActiveModel::Serializer
	attributes :id, :name, :description, :zones
end