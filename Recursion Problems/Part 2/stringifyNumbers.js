// Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!

// The exercise intends for you to create a new object with the numbers converted to strings, and not modify the original. Keep the original object unchanged.

const stringifyNumbers = (obj) => {
	let newObj = {}

	for (let key in obj) {
		if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
			newObj[key] = stringifyNumbers(obj[key])
		} else if (typeof obj[key] === 'number') {
			newObj[key] = String(obj[key])
		} else {
			newObj[key] = obj[key]
		}
	}
	return newObj
}
