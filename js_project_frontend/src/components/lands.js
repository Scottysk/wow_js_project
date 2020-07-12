class Lands {
	constructor() {
		this.lands = []
		this.adapter = new LandsAdapter()
		this.initbindEventListeners()
		this.fetchAndLoadLands()
	}

	initbindEventListeners() {
		this.landsContainer = document.getElementById('lands-container')
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
		landsContainer.innerHTML = this.lands.map(land => land.renderLiNameAndDescription()).join(" ")
		
	}


}