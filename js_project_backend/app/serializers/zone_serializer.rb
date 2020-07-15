class ZoneSerializer < ActiveModel::Serializer
	attributes :id, :name, :description, :land_id
end