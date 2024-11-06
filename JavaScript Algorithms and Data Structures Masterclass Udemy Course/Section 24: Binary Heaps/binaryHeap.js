class MaxBinaryHeap {
	constructor() {
		this.values = [41, 30, 33, 19, 27, 34]
	}

	insert(value) {
		this.values.push(value)
		this.bubbleUp(value)
		return this.values
	}
	bubbleUp(value) {
		let currentIndex = this.values.length - 1
		while (currentIndex > 0) {
			let parentIndex = Math.floor((currentIndex - 1) / 2)
			let parentValue = this.values[parentIndex]
			if (value <= parentValue) break
			this.values[parentIndex] = value
			this.values[currentIndex] = parentValue
			currentIndex = parentIndex
		}
	}
	extractMax() {
		let root = this.values[0]
		let mostRecent = this.values.pop()
		if (this.values.length !== 0) {
			this.values[0] = mostRecent
			this.bubbleDown(mostRecent)
		}

		// return root
		return this.values
	}
	bubbleDown(value) {
		let currentIndex = 0
		while (currentIndex < this.values.length) {
			// check if 2n + 1 and + 2 are greater (also compare +1 and +2 to each other)
			let leftIndex = currentIndex * 2 + 1
			let leftValue = this.values[leftIndex]
			let rightIndex = currentIndex * 2 + 2
			let rightValue = this.values[rightIndex]

			if (rightIndex > this.values.length - 1)
				rightValue = this.values[currentIndex] - 1

			if ((value > leftValue && value > rightValue) || leftValue === undefined)
				break
			// swap with the higher value
			if (leftValue > rightValue) {
				this.values[currentIndex] = leftValue
				this.values[leftIndex] = value
				currentIndex = leftIndex
			} else {
				this.values[currentIndex] = rightValue
				this.values[rightIndex] = value
				currentIndex = rightIndex
			}
			// currentIndex is now the swapped index
			// repeat
		}
	}
}

let heap = new MaxBinaryHeap()

console.log(heap.insert(55))
console.log(heap.insert(52))
console.log(heap.insert(32))

console.log(heap.extractMax())
// [ ( 52, 32, 41, 30, 27, 34, 33, 19 ) ]
// console.log(heap.extractMax())
// console.log(heap.extractMax())
