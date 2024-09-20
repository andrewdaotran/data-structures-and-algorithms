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
}

const doublyLinkedList = new DoublyLinkedList()

doublyLinkedList.push(10)
doublyLinkedList.push(20)
doublyLinkedList.push(30)
doublyLinkedList.push(40)

// doublyLinkedList.print()
// console.log(doublyLinkedList)
// console.log(doublyLinkedList.get(2))
