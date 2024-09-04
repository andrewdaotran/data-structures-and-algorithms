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
}

// const linkedList = new SinglyLinkedList()

// linkedList.push(3)
// linkedList.push(4)
// linkedList.push(5)
// linkedList.push(6)
// linkedList.push(7)

// console.log(linkedList.pop())
// console.log(linkedList)
