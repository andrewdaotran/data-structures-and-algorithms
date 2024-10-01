// Last in first out

// Array Version

let stack = []

// Adding
stack.push(1)

// Removing
stack.pop()

// Data Structure from scratch w/ linked list

class Node {
	constructor(val) {
		this.val = val
		this.next = null
	}
}

class Stack {
	constructor() {
		this.first = null
		this.length = 0
	}

	push(val) {
		const newNode = new Node(val)

		if (this.first) newNode.next = this.first

		this.first = newNode

		return ++this.length
	}

	pop() {
		if (!this.first) return undefined

		const removedNode = this.first

		this.first = this.first.next

		removedNode.next = null

		this.length--

		return removedNode
	}
}

let newStack = new Stack()

newStack.push(1)
newStack.push(2)
newStack.push(3)
newStack.push(4)
console.log(newStack)

console.log(newStack.pop())
console.log(newStack)
console.log(newStack.pop())
console.log(newStack)
console.log(newStack.pop())

console.log(newStack)
