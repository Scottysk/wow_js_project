document.addEventListener("DOMContentLoaded", function() {
	Land.createLand()
	Land.getAllLands()
	Land.getDropDownChange()
})

let dd = document.querySelector(".lands-select")
let land = document.querySelector(".land")


class Land {
	constructor(landJSON) {
		this.id = landJSON.id;
		this.name = landJSON.name;
		this.description = landJSON.description
		this.zones = landJSON.zones
	}
 
	static createLand() {
		let landForm = document.querySelector(".new-land-form")
		landForm.addEventListener("submit", function(event) {
			event.preventDefault()

		fetch("http://localhost:3000/lands", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				name: event.target[0].value
			})

		})
		.then(response => response.json())
		.then(data => {
			let newLand = new Land(data)
			newLand.addLandtoDom()
		})
		event.target[0].value = ""



	})
	}




	static getAllLands() {
		let dd = document.querySelector(".lands-select")
		fetch("http://localhost:3000/lands")
		.then(response => response.json())
		.then(data => {
			data.map(c => {


			let newLand = new Land(c)
			dd.innerHTML = dd.innerHTML + `<option value="${c.id}">${c.name}</option>`

			newLand.addLandtoDom()
			})
		})

	}

		addLandtoDom() {
			let land = document.querySelector(".land")
			let p = document.createElement("p")
			p.innerText = this.name
			land.appendChild(p)
		}



	static getDropDownChange() {
		let select = document.querySelector(".lands-select")
		select.addEventListener("change", function(event) {
			landJSON.innerHTML = "";
			fetch('http://localhost:3000/lands/${event.target.value}')
			.then(response => response.json{})
			.then(data => data.forEach(element => {
				let newZone = new Zone(element)
				newZone.appZoneToDom()
			}))
		})
	}



}
