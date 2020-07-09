class Lands {
	constructor() {
		this.lands = []
		this.adapter = new LandsAdapter()
		this.bindEventListeners()
		this.fetchAndLoadLands()
	}


	fetchAndLoadLands() {
		this.adapter.getLands().then(lands => {
			return console.log(lands)
		})
	}


}