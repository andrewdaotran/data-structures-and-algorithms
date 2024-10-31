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
}
