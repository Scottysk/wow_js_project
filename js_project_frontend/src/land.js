document.addEventListener("DOMContentLoaded", function() {
	Land.createLand()
	Land.getAllLands()
	Land.getDropDownChange()
})

let dd = document.querySelector(".lands-select")
let land = document.querySelector(".land")


class Land {
	constructor(land) {
		this.id = land.id;
		this.name = land.name;
		this.description = land.description
		this.zones = land.zones
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
		fetch("http://localhost:3000/lands")
		.then(response => response.json())
		.then(data => {
			data.map(l => {


			let newLand = new Land(l)
			dd.innerHTML = dd.innerHTML + `<option value="${l.id}">${l.name}</option>`
			newLand.addLandtoDom()
			})
			})
		}


		addLandtoDom() {
			let p = document.createElement("p")
			p.innerText = this.name
			land.appendChild(p)
		}



	static getDropDownChange() {

		dd.addEventListener("change", function(e) {
			land.innerHTML = "";
			fetch(`http://localhost:3000/lands/${e.target.value}`)
			.then(response => response.json())
			.then(data => {
				console.log("data", data)
				data.zones.map(element => {
					let newZone = new Zone(element)
					newZone.appendZoneToDom()
				})
			})
		})
	}




}
