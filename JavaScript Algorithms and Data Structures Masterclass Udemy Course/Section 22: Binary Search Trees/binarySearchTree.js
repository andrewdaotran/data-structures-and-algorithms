class Node {
	constructor(value) {
		this.value = value
		this.left = null
		this.right = null
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null
	}
	insert(value) {
		// Iterative Solution
		const newNode = new Node(value)
		if (!this.root) {
			this.root = newNode
			return this
		}
		let currentNode = this.root
		while (true) {
			if (newNode.value === currentNode.value) return this
			if (newNode.value > currentNode.value) {
				if (!currentNode.right) {
					currentNode.right = newNode
					return this
				}
				currentNode = currentNode.right
			} else if (newNode.value < currentNode.value) {
				if (!currentNode.left) {
					currentNode.left = newNode
					return this
				}
				currentNode = currentNode.left
			}
		}
		// Iterative Solution End
	}
	find(value) {
		if (!this.root) return false
		let currentNode = this.root
		while (true) {
			if (value === currentNode.value) return currentNode
			if (value > currentNode.value) {
				if (!currentNode.right) {
					return false
				}
				currentNode = currentNode.right
			} else if (value < currentNode.value) {
				if (!currentNode.left) {
					return false
				}
				currentNode = currentNode.left
			}
		}
	}
}

const tree = new BinarySearchTree()

tree.insert(10)
tree.insert(2)
tree.insert(13)
tree.insert(99)

// console.log(tree)

// console.log(tree.find(21))
// console.log(tree.find(2))
