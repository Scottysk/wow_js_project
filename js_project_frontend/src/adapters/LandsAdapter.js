class LandsAdapter {
	constructor() {
		this.baseUrl = 'http://localhost:3000/lands'
	}

	getLands() {
		return fetch(this.baseUrl).then(response => response.json())
	}
}

