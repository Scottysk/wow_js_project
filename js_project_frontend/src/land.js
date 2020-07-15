
//	renderLiNameAndDescription() {
//		return `<li>${this.name}</li> ${this.description}`
// }

document.addEventListener("DOMContentLoaded", function() {
	Land.createLand()
	Land.getAllLands()
})

class Land {
	constructor(landJSON) {
		this.id = landJSON.id;
		this.name = landJSON.name;
		this.description = landJSON.description

	}
 
	static createLand() {
		let landForm = document.querySelector(".favorite-land-form")
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
			data.map(c => {


			let newLand = new Land(c)
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



}
