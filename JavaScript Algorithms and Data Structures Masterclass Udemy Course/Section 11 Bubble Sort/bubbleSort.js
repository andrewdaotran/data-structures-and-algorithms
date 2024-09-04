const bubbleSort = (arr) => {
	for (let i = arr.length - 1; i > 0; i--) {
		for (let j = 0; j < i; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j]
				arr[j] = arr[j + 1]
				arr[j + 1] = temp
			}
		}
	}
	return arr
}

const bubbleSortOptimized = (arr) => {
	for (let i = arr.length - 1; i > 0; i--) {
		let isSwapped = false
		for (let j = 0; j < i; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j]
				arr[j] = arr[j + 1]
				arr[j + 1] = temp
				isSwapped = true
			}
		}
		if (!isSwapped) break
	}
	return arr
}

// console.log(bubbleSortOptimized([0,12, 4, 13, 9]))
