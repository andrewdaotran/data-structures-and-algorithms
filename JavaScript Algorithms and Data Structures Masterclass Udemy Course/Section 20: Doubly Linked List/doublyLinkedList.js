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
			arr.push(currentNode)
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

	get(pos) {
		if (pos < 0 || pos >= this.length) return null
		let counter = 0
		let currentNode = this.head

		while (counter < pos) {
			currentNode = currentNode.next
			counter++
		}
		return currentNode
	}
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
		const half = Math.floor(this.length / 2)
		let counter
		let currentNode
		if (pos > half) {
			counter = this.length - 1
			currentNode = this.tail
			while (counter > pos) {
				currentNode = currentNode.prev
				counter--
			}
		} else {
			counter = 0
			currentNode = this.head
			while (counter < pos) {
				currentNode = currentNode.next
				counter++
			}
		}
		return currentNode
	}
}

const doublyLinkedList = new DoublyLinkedList()

doublyLinkedList.push(10)
doublyLinkedList.push(20)
doublyLinkedList.push(30)
doublyLinkedList.push(40)

console.log(doublyLinkedList.get(2))

// doublyLinkedList.print()
// console.log(doublyLinkedList)
// console.log(doublyLinkedList.get(2))
