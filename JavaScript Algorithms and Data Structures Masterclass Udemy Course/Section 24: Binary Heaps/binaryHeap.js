class MaxBinaryHeap {
	constructor() {
		this.values = []
	}

	insert(value) {
		this.values.push(value)
		this.bubbleUp(value)
	}
	bubbleUp(value) {
		let currentIndex = this.values.length - 1
		while (currentIndex > 0) {
			let parentIndex = Math.floor(currentIndex - 1 / 2)
			let parentValue = this.values[parentIndex]
			if (value <= parentValue) break
			this.values[parentIndex] = value
			this.values[currentIndex] = parentValue
			currentIndex = parentIndex
		}
	}
}
