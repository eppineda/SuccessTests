class Outcome {
	constructor(result, description) {
		if (Outcome === this.constructor) throw new Error('abstract base class')
		this.SUCCESS = 'success'
		this.FAILURE = 'failure'
		this.result = result || this.FAILURE
		this.description = description || this.result
	}
	isSuccessful() { return this.SUCCESS === this.result }
	isFailure() { return this.FAILURE === this.result }
}

export default Outcome
