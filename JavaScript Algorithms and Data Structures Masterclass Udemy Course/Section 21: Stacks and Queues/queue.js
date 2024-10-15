class Node {
	constructor(val) {
		this.val = val
		this.next = null
	}
}

class Queue {
	constructor() {
		this.first = null
		this.last = null
		this.length = 0
	}

	enqueue(val) {
		const newNode = new Node(val)
		if (!this.first) {
			this.first = newNode
			this.last = newNode
		} else {
			this.last.next = newNode
			this.last = newNode
		}

		this.length++
		return this
	}

	dequeue() {
		if (!this.first) return null
		const oldFirst = this.first
		if (this.length === 1) {
			// this.first = null
			this.last = null
		}
		this.first = oldFirst.next
		oldFirst.next = null

		this.length--
		return oldFirst.val
	}

	print() {
		let arr = []
		let current = this.first
		while (current) {
			arr.push(current.val)
			current = current.next
		}
		console.log(arr)
	}
}

const newQueue = new Queue()

newQueue.enqueue('hello')
newQueue.enqueue('there')
newQueue.enqueue('person')
newQueue.print()

// console.log(newQueue)

// newQueue.dequeue()

// console.log(newQueue)
