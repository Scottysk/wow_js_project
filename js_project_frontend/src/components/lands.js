class Lands {
	constructor() {
		this.lands = []
		this.adapter = new LandsAdapter()
		//this.bindEventListeners()
		this.fetchAndLoadLands()
	}


	fetchAndLoadLands() {
		this.adapter
			.getLands()
			.then(lands => {
			lands.forEach(land => this.lands.push(new Land(land)))
		})
		.then(() =>  {
			this.render()
		})
	}

	render() {
		const landsContainer = document.getElementById('lands-container')
		landsContainer.innerHTML = this.lands.map(land => `<li>${land.name}</li> ${land.description}`).join(" ")
		
	}


}