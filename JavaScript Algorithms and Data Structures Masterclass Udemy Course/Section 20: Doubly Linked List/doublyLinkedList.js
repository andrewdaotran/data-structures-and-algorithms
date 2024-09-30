class Node {
	constructor(val) {
		this.val = val
		this.prev = null
		this.next = null
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null
		this.tail = null
		this.length = 0
	}

	print() {
		let currentNode = this.head
		let arr = []
		let arrNext = []
		let arrPrev = []
		while (currentNode) {
			arr.push(currentNode.val)
			// arr.push(currentNode)
			currentNode = currentNode.next
		}
		console.log(arr)
	}

	push(val) {
		const newNode = new Node(val)
		if (!this.head) {
			this.head = newNode
			this.tail = newNode
		} else {
			this.tail.next = newNode
			newNode.prev = this.tail
			this.tail = newNode
		}

		this.length++

		return this
	}

	// get(pos) {
	// 	if (pos < 0 || pos >= this.length) return null
	// 	let counter = 0
	// 	let currentNode = this.head

	// 	while (counter < pos) {
	// 		currentNode = currentNode.next
	// 		counter++
	// 	}
	// 	return currentNode
	// }
	pop() {
		if (!this.head) return undefined
		const poppedNode = this.tail
		if (this.length === 1) {
			this.head = null
			this.tail = null
		} else {
			this.tail = poppedNode.prev
			this.tail.next = null
			poppedNode.prev = null
		}
		this.length--
		return poppedNode
	}
	shift() {
		if (!this.head) return undefined
		const shiftedNode = this.head
		if (this.length === 1) {
			this.head = null
			this.tail = null
		} else {
			this.head = shiftedNode.next
			this.head.prev = null
			shiftedNode.next = null
		}

		this.length--
		return shiftedNode
	}
	unshift(val) {
		const newHead = new Node(val)
		const oldHead = this.head
		this.head = newHead
		if (!this.head) {
			this.tail = newHead
		} else {
			newHead.next = oldHead
			oldHead.prev = newHead
		}
		this.length++
		return this
	}
	get(pos) {
		if (pos >= this.length || pos < 0) return undefined
		const half = Math.floor(this.length - 1 / 2)
		let counter
		let currentNode
		if (pos > half) {
			// console.log('working from end')
			counter = this.length - 1
			currentNode = this.tail
			while (counter > pos) {
				currentNode = currentNode.prev
				counter--
			}
		} else {
			// console.log('working from start')
			counter = 0
			currentNode = this.head
			while (counter < pos) {
				currentNode = currentNode.next
				counter++
			}
		}
		return currentNode
	}
	set(pos, val) {
		let nodeToBeUpdated = this.get(pos)
		if (nodeToBeUpdated) {
			nodeToBeUpdated.val = val
			return true
		}
		return fase
	}
	insert(pos, val) {
		if (pos < 0 || pos > this.length) return false
		if (pos === 0) return Boolean(this.unshift(val))
		if (pos === this.length) return Boolean(this.push(val))

		const insertedNode = new Node(val)
		const previousNode = this.get(pos - 1)
		const nextNode = previousNode.next

		previousNode.next = insertedNode
		insertedNode.prev = previousNode

		nextNode.prev = insertedNode
		insertedNode.next = nextNode

		this.length++

		return true
	}
	remove(pos) {
		if (pos < 0 || pos <= this.length) return undefined
		if (pos === 0) return this.shift()
		if (pos === this.length - 1) return this.pop()

		const previousNode = this.get(pos - 1)
		const removedNode = previousNode.next
		const nextNode = removedNode.next

		previousNode.next = nextNode
		nextNode.prev = previousNode

		removedNode.next = null
		removedNode.prev = null

		this.length--

		return removedNode
	}
}

const doublyLinkedList = new DoublyLinkedList()

doublyLinkedList.push(10)
doublyLinkedList.push(20)
doublyLinkedList.push(30)
doublyLinkedList.push(40)

// console.log(doublyLinkedList.get(3))

doublyLinkedList.insert(1, 100)
doublyLinkedList.insert(3, 200)
// console.log(doublyLinkedList.print())

// doublyLinkedList.print()
// console.log(doublyLinkedList)
// console.log(doublyLinkedList.get(2))
