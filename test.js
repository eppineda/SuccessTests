import Outcome from './outcome.js'

class Test {
	constructor(influencers) {
		if (Test === this.constructor) throw new Error('abstract base class')
		this.influencers = influencers || []
		this.outcome = undefined
	}

	apply(modifier) {
		if (Test === this.constructor) throw new Error('abstract base class')
	}

	attempt() {
		this.influencer.forEach(modifier => {
			if (Outcome.SUCCESS === this.outcome) this.outcome = apply(modifier)
		})
	}
}

export default Test
