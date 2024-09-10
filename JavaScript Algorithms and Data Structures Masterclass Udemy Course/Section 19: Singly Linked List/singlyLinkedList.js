// Need to create a node class and a singly linked list class

// Node class
class Node {
	constructor(val) {
		this.val = val
		this.next = null
	}
}

// Singly Linked List class

class SinglyLinkedList {
	constructor() {
		this.head = null
		this.tail = null
		this.length = 0
	}

	push(val) {
		if (!this.head) {
			this.head = new Node(val)
			this.tail = this.head
		} else {
			this.tail.next = new Node(val)
			this.tail = this.tail.next
		}
		this.length++
		return this
	}

	pop() {
		if (!this.head) return undefined
		let tail = this.tail
		if (this.length === 1) {
			this.head = null
			this.tail = nulll
		} else {
			let current = this.head
			while (current.next) {
				// console.log(current)
				if (current.next === this.tail) {
					current.next = null
					this.tail = current
				} else {
					current = current.next
				}
			}
			this.length--
		}
		return tail
	}

	shift() {
		// get the value of the head
		// make the this.head.next the new head
		// return the old head
		if (!this.head) return undefined
		const head = this.head
		this.head = head.next
		head.next = null
		this.length--
		if (this.length === 1) this.tail = null
		return head
	}
	unshift(val) {
		// create a new node
		// make the new node.next the old head
		// make the new head the new node
		const newHead = new Node(val)
		if (!this.head) {
			this.head = newHead
			this.tail = newHead
		} else {
			newHead.next = this.head
			this.head = newHead
		}
		this.length++
		return this
	}

	get(pos) {
		// loop through the linked list until we reach the position
		// return the node
		if (pos < 0 || pos >= this.length) return null
		if (pos === 0) return this.head
		let counter = 1
		let currentNode = this.head.next
		while (counter < pos) {
			currentNode = currentNode.next
			counter++
		}
		return currentNode
	}
}

// const linkedList = new SinglyLinkedList()

// linkedList.push(3)
// linkedList.push(4)
// linkedList.push(5)
// linkedList.push(6)
// linkedList.push(7)

// console.log(linkedList.pop())
// console.log(linkedList)
// console.log(linkedList.get(5))
