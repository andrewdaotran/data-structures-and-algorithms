// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

const flatten = (arr) => {
	let flattened = []

	for (let i = 0; i < arr.length; i++) {
		// check if arr[i] is an array, if so, do something
		if (Array.isArray(arr[i])) {
			flattened = flattened.concat(flatten(arr[i]))
		} else {
			// if arr[i] is not an array, push arr[i] in flattened
			flattened.push(arr[i])
		}
	}
	return flattened
}

