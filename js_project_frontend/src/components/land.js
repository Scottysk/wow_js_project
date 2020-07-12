class Land {
	constructor(landJSON) {
		this.id = landJSON.id
		this.name = landJSON.name
		this.description = landJSON.description
	}

	renderLiNameAndDescription() {
		return `<li>${this.name}</li> ${this.description}`
	}
}