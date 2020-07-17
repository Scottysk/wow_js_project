class Zone {
	constructor(zone) {
		this.id = zone.id
		this.name = zone.name
		this.description = zone.description
		this.landId = zone.land_id
	}

	appendZoneToDom() {
		let div = document.createElement("div")
		div.setAttribute("land", "zone-box")
		div.innerHTML = `<p>${this.name} ${this.description}</p>`
		land.appendChild(div)
	}
}