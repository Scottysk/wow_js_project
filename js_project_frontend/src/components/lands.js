class Lands {
	constructor() {
		this.lands = []
		this.adapter = new LandsAdapter()
		// this.bindEventListeners()
		this.fetchAndLoadLands()
	}


	fetchAndLoadLands() {
		this.adapter.getLands().then(lands => {
			lands.forEach(land => this.lands.push(land))
		})
		.then(() =>  {
			this.render()
		})
	}

	render() {
		const landsContainer = document.getElementById('lands-container')
		console.log("World of Warcraft's lands:", this.lands)
	}


}