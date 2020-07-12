class Lands {
	constructor() {
		this.lands = []
		this.adapter = new LandsAdapter()
		this.fetchAndLoadLands()
	}





	fetchAndLoadLands() {
		this.adapter
			.getLands()
			.then(lands => {
			lands.map(land => this.lands.push(new Land(land)))
		})
		.then(() =>  {
			this.render()
		})
	}

	render() {
		const landsContainer = document.getElementById('lands-container')
		landsContainer.innerHTML = this.lands.map(land => land.renderLiNameAndDescription()).join(" ")
		
	}


}