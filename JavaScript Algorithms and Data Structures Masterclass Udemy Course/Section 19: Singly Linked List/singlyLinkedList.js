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
	set(pos, val) {
		// loop through the linked list to find the position
		// change the value to the new value
		// if (pos >= this.length || pos < 0) return null
		// let counter = 0
		// let currentNode = this.head
		// while (pos !== counter) {
		// 	currentNode = currentNode.next
		// 	counter++
		// }
		let currentNode = this.get(pos)
		if (currentNode) {
			currentNode.val = val
			return true
		}
		return false
	}
	insert(pos, val) {
		// navigate through the linkedlist until you find the position
		// save the value of the previous node and make its .next value the new inserted node
		// save the value of the next node and make the new inserted node's next value that
		// increment the length by 1
		if (pos < 0 || pos > this.length) return false
		if (pos === this.length) return Boolean(this.push(val))
		if (pos === 0) return Boolean(this.unshift(val))

		let insertedNode = new Node(val)
		let previousNode = this.get(pos - 1)
		let nextNode = previousNode.next

		insertedNode.next = nextNode
		previousNode.next = insertedNode
		this.length++

		return true
	}

	remove(pos) {
		// navigate through the linked list with the get method to find the node we want and the previous node
		// cut the connection with the previous node and connect it to the next node instead
		// decrement length by 1

		if (pos >= this.length || pos < 0) return undefined
		if (pos === 0) return this.shift()
		if (pos === this.length - 1) return this.pop()

		const previousNode = this.get(pos - 1)
		const removednode = previousNode.next
		const nextNode = removednode.next

		previousNode.next = nextNode
		removednode.next = null

		this.length--

		return removednode.val
	}

	reverse() {
		// make the old head the new tail
		// store the newTail's next in a variable
		// make the newTail's next the new Tail
		// continue to traverse the linked list and continue

		if (this.length === 0 || this.length === 1) return
		let counter = 0
		let currentNode = null
		let nextNextNode = null
		while (counter < this.length) {
			if (counter === 0) {
				this.tail = this.head
				currentNode = this.tail
			} else {
				currentNode = this.get(counter)
			}
			nextNextNode = currentNode.next.next
			currentNode.next.next = currentNode
			counter++
			if (counter === this.length - 1) this.head = currentNode
		}
		return this
	}
}

const linkedList = new SinglyLinkedList()

linkedList.push(3)
linkedList.push(4)
linkedList.push(5)
linkedList.push(6)
linkedList.push(7)

// console.log(linkedList.pop())
console.log(linkedList)
// console.log(linkedList.get(2), linkedList.get(3))
// console.log(linkedList.get(5))
// console.log(linkedList.get(2))
// linkedList.set(2, 1111)
// console.log(linkedList.get(2))
// linkedList.insert(3, 2500)
// console.log(linkedList.get(2), linkedList.get(3))

// console.log(linkedList.insert(0, 100))
// console.log(linkedList.get(0))
// console.log(linkedList.get(1))
console.log(linkedList.reverse())
