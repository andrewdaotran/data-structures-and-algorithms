class Node {
	constructor(value) {
		this.value = value
		this.left = null
		this.right = null
	}
}

class Tree {
	constructor() {
		this.root = null
	}

	BFS() {
		// Breadth First Search
		// From the top, left to right by level
		let queue = []
		let visited = []
		let currentNode = this.root
		queue.push(currentNode)

		while (queue[0]) {
			currentNode = queue.shift()
			visited.push(currentNode)
			if (currentNode.left) queue.push(currentNode.left)
			if (currentNode.right) queue.push(currentNode.right)
		}

		return visited
	}
	DFSPreOrder() {
		let visited = []
		let currentNode = this.root
		let traverse = (node) => {
			visited.push(node.value)
			if (node.left) traverse(node.left)
			if (node.right) traverse(node.right)
		}

		traverse(currentNode)

		return visited
	}

	DFSPostOrder() {
		let visited = []
		let currentNode = this.root

		let traverse = (node) => {
			if (node.left) traverse(node.left)
			if (node.right) traverse(node.right)
			visited.push(node.value)
		}

		traverse(currentNode)
		return visited
	}

	DFSInOrder() {
		let visited = []
		let currentNode = this.root

		let traverse = (node) => {
			if (this.left) traverse(this.left)
			visited.push(node.value)
			if (this.right) traverse(this.right)
		}

		traverse(currentNode)
		return visited
	}
}
